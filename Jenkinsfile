awsProfile = ''
slackChannel = "research-hub"
slackCredentials = "UoA-Slack-Access-Research-Hub"
tagSet = '''TagSet=[\
{Key=BusinessService,Value="Faculty of Science"},\
{Key=Department,Value="Centre for eResearch"},\
{Key=ProjectCode,Value="N/A"},\
{Key=Faculty,Value="Science"},\
{Key=WikiLink,Value="N/A"},\
{Key=Application,Value="CeR Research Dashboard"},\
{Key=CostCentre,Value="N/A"}]'''


pipeline {
    agent {
        label("uoa-buildtools-ionic")
    }

    stages {
        stage("Checkout") {
            steps {
                checkout scm
                slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, message: "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
            }
        }
        
        stage('Build') {
            stages {
                stage("Create new node_modules/ cache") {
                    when {
                        changeset "package.json"
                    }
                    steps {
                        echo "Installing dashboard-ui dependencies."
                        sh "npm install"
                        sh "tar cfz ./node_modules.tar.gz node_modules" // Cache new node_modules/ folder
                        archiveArtifacts artifacts: "node_modules.tar.gz", onlyIfSuccessful: true
                    }
                }

                stage('Load node_modules/ cache') {
                    when {
                        not {
                            changeset "package.json"
                        }
                    }
                    steps {
                        echo "Loading dashboard-ui dependencies from cache."
                        copyArtifacts filter: "node_modules.tar.gz", fingerprintArtifacts: true, optional: true, projectName: env.JOB_NAME, selector: lastWithArtifacts()
                        sh "tar xf ./node_modules.tar.gz" // Unzip cached node_modules/ folder
                        sh "npm install"
                    }
                }

                stage('Building dashboard-ui project.') {
                    steps {
                        script {
                            echo "Building dashboard-ui project. Build number: ${env.BUILD_NUMBER}"
                            def build = (env.BRANCH_NAME == 'prod') ? 'production' : env.BRANCH_NAME
                            echo "Build = ${build}"
                            sh "node --version"
                            sh "npm --version"

                            echo "Replacing Version Number in the app..."
                            sh "sed -i 's/VERSION_WILL_BE_REPLACED_BY_CICD/#${env.BUILD_NUMBER}/g' src/environments/environment.${env.BRANCH_NAME}.ts"

                            echo "Building the app..."
                            sh "npm run build -- --configuration=${build}"
                            echo "Build complete"
                        }
                    }
                }                
            }
        }
        
        stage('Run tests') {
            steps {
                echo 'Testing dashboard-ui project'

                echo 'Running unit tests'
                sh 'npm run test:headless'

                // Set service account credentials as env vars for e2e tests
                withCredentials([
                    usernamePassword(credentialsId: 'Automation-Test-Account', passwordVariable: 'CYPRESS_TEST_ACCT_PASSWORD', usernameVariable: 'CYPRESS_TEST_ACCT_USERNAME')
                ]) {
                    echo 'Running e2e tests'
                    sh 'npm run e2e-ci'
                }

                echo 'Testing complete'
            }
        }

        stage('AWS Credential Grab') {
            steps{
                script {
                    echo "☯ Authenticating with AWS"

                    def awsCredentialsId = ''
                    def awsTokenId = ''

                    if (env.BRANCH_NAME == 'sandbox') {
                        echo 'Setting variables for sandbox deployment'
                        awsCredentialsId = 'aws-sandbox-user'
                        awsTokenId = 'aws-sandbox-token'
                        awsProfile = 'uoa-sandbox'

                    } else if (env.BRANCH_NAME == 'nonprod') {
                        echo 'Setting variables for nonprod deployment'
                        awsCredentialsId = 'aws-its-nonprod-access'
                        awsTokenId = 'aws-its-nonprod-token'
                        awsProfile = 'uoa-its-nonprod'

                    } else if (env.BRANCH_NAME == 'prod') {
                        echo 'Setting variables for prod deployment'
                        awsCredentialsId = 'uoa-its-prod-access'
                        awsTokenId = 'uoa-its-prod-token'
                        awsProfile = 'uoa-its-prod'

                    } else {
                        echo 'No Env set'
                    }

                    echo "awsProfile set to ${awsProfile}"
                    
                    withCredentials([
                        usernamePassword(credentialsId: "${awsCredentialsId}", passwordVariable: 'awsPassword', usernameVariable: 'awsUsername'),
                        string(credentialsId: "${awsTokenId}", variable: 'awsToken')
                    ]) {
                        sh "python3 /home/jenkins/aws_saml_login.py --idp iam.auckland.ac.nz --user $awsUsername --password $awsPassword --token $awsToken --profile ${awsProfile} --role devops"
                    }
                }
            }
        }
  
        stage('Deploy') {
            steps {
                script {
                    echo "Deploying dashboard-ui to S3 on ${env.BRANCH_NAME}"
                    
                    def s3BucketName = (
                        env.BRANCH_NAME == 'prod' ? 'cer-dashboard' : 
                        env.BRANCH_NAME == 'nonprod' ? 'cer-dashboard-nonprod' : 
                        'cer-dashboard-sandbox'
                    )

                    sh "aws s3 sync www s3://${s3BucketName} --delete --profile ${awsProfile}"
                    echo "Sync complete"

                    sh "aws s3api put-bucket-tagging --bucket ${s3BucketName} --tagging ${tagSet} --profile ${awsProfile}"
                    echo "Tags updated"
                }
                
            }
        }

        stage("Invalidate CloudFront") {
            steps {
                script {
                    echo "Invalidating..."

                    def awsCloudFrontDistroId = (
                        env.BRANCH_NAME == 'prod' ? '' : 
                        env.BRANCH_NAME == 'nonprod' ? '' : 
                        'E1ULTSGYFI5SZU'
                    )

                    echo "Cloudfront distro id: ${awsCloudFrontDistroId}"
                    
                    sh "aws cloudfront create-invalidation --distribution-id ${awsCloudFrontDistroId} --paths '/*' --profile ${awsProfile}"
                    echo "Invalidation started"
                }
            }
        }

        stage('BrowserStack e2e Tests') {
            steps {
                echo 'Deployed to ' + env.BRANCH_NAME + ', launching BrowserStack e2e Tests'
                slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#5eff00", message: "🚀 Deploy successful - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>).\n 📹 Launching BrowserStack e2e tests. <https://automate.browserstack.com/dashboard|Watch Videos>")

                script {
                    def dashboardUrl = (
                        env.BRANCH_NAME == 'prod' ? 'https://eresearch-dashboard.amazon.auckland.ac.nz/' : 
                        env.BRANCH_NAME == 'nonprod' ? 'https://eresearch-dashboard.test.amazon.auckland.ac.nz/' : 
                        'https://eresearch-dashboard.sandbox.amazon.auckland.ac.nz/'
                    )

                    echo "eResearch Dashboard URL: ${dashboardUrl}"

                    try {
                        // Set Browserstack account credentials as env vars
                        withCredentials([
                            usernamePassword(credentialsId: 'Browserstack-Credentials', passwordVariable: 'BROWSERSTACK_CREDENTIALS_KEY', usernameVariable: 'BROWSERSTACK_CREDENTIALS_USER'),
                            usernamePassword(credentialsId: 'Automation-Test-Account', passwordVariable: 'TEST_ACCT_PASSWORD', usernameVariable: 'TEST_ACCT_USERNAME')
                        ]) {
                            sh "./node_modules/.bin/protractor e2e/protractor.conf.browserstack-remote --baseUrl=${dashboardUrl}"
                        }

                        slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#5eff00", message: "🙆‍♀️🙆🙆‍♂️ All BrowserStack e2e tests passed")

                    } catch(exc) {
                        slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#f2ae3f", message: "🙅‍♀️🙅🙅‍♂️ One or more BrowserStack e2e tests failed. Consider reverting to an earlier deploy")
                        error 'BrowserStack e2e tests failed'
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "Jenkins job ran successfully. Deployed to ${env.BRANCH_NAME}"
            slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#5eff00", message: "🌞Build successful - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
        }
        failure {
            echo 'Jenkins job failed :('
            slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#FF9FA1", message: "🌩 Build failed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
        }
    }
}