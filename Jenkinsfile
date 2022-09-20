awsProfile = ''
slackChannel = "research-hub"
slackCredentials = "UoA-Slack-Access-Research-Hub"
tagSet = '''TagSet=[\
{Key=BusinessService,Value="eResearch Services"},\
{Key=Department,Value="Centre for eResearch"},\
{Key=ProjectCode,Value="TBC"},\
{Key=Faculty,Value="Science"},\
{Key=WikiLink,Value="https://wiki.auckland.ac.nz/display/APPLCTN/eResearch+Dashboard"},\
{Key=Application,Value="eResearch Dashboard"},\
{Key=CostCentre,Value="TBC"}]'''


pipeline {
    agent {
        label("uoa-buildtools-ionic")
    }

    options {
        buildDiscarder(
            logRotator(
                daysToKeepStr: "30"
            )
        )
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
                stage("Install npm packages") {
                    steps {
                        echo "Installing dashboard-ui dependencies from package-lock.json."
                        sh "npm ci"
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
                // withCredentials([
                //     usernamePassword(credentialsId: 'Automation-Test-Account', passwordVariable: 'TEST_ACCT_PASSWORD', usernameVariable: 'TEST_ACCT_USERNAME')
                // ]) {
                //     echo 'Running e2e tests'
                //     sh 'npx webdriver-manager update --versions.chrome=$(google-chrome --version | grep -ioE "[0-9.]{10,20}")'
                //     sh 'npm run e2e-ci'
                // }

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

                    } else if (env.BRANCH_NAME == 'dev') {
                        echo 'Setting variables for dev deployment'
                        awsCredentialsId = 'aws-its-nonprod-access'
                        awsTokenId = 'aws-its-nonprod-token'
                        awsProfile = 'uoa-its-nonprod'

                    } else if (env.BRANCH_NAME == 'test') {
                        echo 'Setting variables for test deployment'
                        awsCredentialsId = 'aws-its-nonprod-access'
                        awsTokenId = 'aws-its-nonprod-token'
                        awsProfile = 'uoa-its-nonprod'

                    } else if (env.BRANCH_NAME == 'prod') {
                        echo 'Setting variables for prod deployment'
                        awsCredentialsId = 'aws-its-prod'
                        awsTokenId = 'Access token for ITS Prod Account'
                        awsProfile = 'uoa-its-prod'

                    } else {
                        echo 'No Env set'
                    }

                    echo "awsProfile set to ${awsProfile}"

                    withCredentials([
                        usernamePassword(credentialsId: "${awsCredentialsId}", passwordVariable: 'awsPassword', usernameVariable: 'awsUsername'),
                        string(credentialsId: "${awsTokenId}", variable: 'awsToken')
                    ]) {
                        sh 'python3 /home/jenkins/aws_saml_login.py --idp iam.auckland.ac.nz --user $awsUsername --password $awsPassword --token $awsToken --role devops --profile ' + awsProfile
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying dashboard-ui to S3 on ${env.BRANCH_NAME}"

                    def s3BucketName = (
                        env.BRANCH_NAME == 'prod' ? 'eresearch-dashboard.auckland.ac.nz' :
                        env.BRANCH_NAME == 'test' ? 'eresearch-dashboard.connect.test.amazon.auckland.ac.nz' :
                        env.BRANCH_NAME == 'dev' ? 'eresearch-dashboard-dev.connect.test.amazon.auckland.ac.nz' :
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
                        env.BRANCH_NAME == 'prod' ? 'E2L1L7YQT93K7P' :
                        env.BRANCH_NAME == 'test' ? 'E3VVN86C419VS8' :
                        env.BRANCH_NAME == 'dev' ? 'E2CGLDC4Q2XU35' :
                        'E1ULTSGYFI5SZU'
                    )

                    echo "Cloudfront distro id: ${awsCloudFrontDistroId}"

                    sh "aws cloudfront create-invalidation --distribution-id ${awsCloudFrontDistroId} --paths '/*' --profile ${awsProfile}"
                    echo "Invalidation started"
                }
            }
        }

        // stage('BrowserStack e2e Tests') {
        //     steps {
        //         echo 'Deployed to ' + env.BRANCH_NAME + ', launching BrowserStack e2e Tests'
        //         slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#5eff00", message: "🚀 Deploy successful - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>).\n 📹 Launching BrowserStack e2e tests. <https://automate.browserstack.com/dashboard|Watch Videos>")

        //         script {
        //             def dashboardUrl = (
        //                 env.BRANCH_NAME == 'prod' ? 'https://eresearch-dashboard.auckland.ac.nz/' :
        //                 env.BRANCH_NAME == 'nonprod' ? 'https://eresearch-dashboard.connect.test.amazon.auckland.ac.nz/' :
        //                 'https://eresearch-dashboard.sandbox.amazon.auckland.ac.nz/'
        //             )

        //             echo "eResearch Dashboard URL: ${dashboardUrl}"

        //             try {
        //                 // Set Browserstack account credentials as env vars
        //                 withCredentials([
        //                     usernamePassword(credentialsId: 'Browserstack-Credentials', passwordVariable: 'BROWSERSTACK_CREDENTIALS_KEY', usernameVariable: 'BROWSERSTACK_CREDENTIALS_USER'),
        //                     usernamePassword(credentialsId: 'Automation-Test-Account', passwordVariable: 'TEST_ACCT_PASSWORD', usernameVariable: 'TEST_ACCT_USERNAME')
        //                 ]) {
        //                     sh "./node_modules/.bin/protractor e2e/protractor.conf.browserstack-remote --baseUrl=${dashboardUrl}"
        //                 }

        //                 slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#5eff00", message: "🙆‍♀️🙆🙆‍♂️ All BrowserStack e2e tests passed")

        //             } catch(exc) {
        //                 slackSend(channel: slackChannel, tokenCredentialId: slackCredentials, color: "#f2ae3f", message: "🙅‍♀️🙅🙅‍♂️ One or more BrowserStack e2e tests failed. Consider reverting to an earlier deploy")
        //                 error 'BrowserStack e2e tests failed'
        //             }
        //         }
        //     }
        // }
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
