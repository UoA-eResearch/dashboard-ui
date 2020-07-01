awsProfile = ''

pipeline {
    agent {
        label("uoa-buildtools-ionic")
    }

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        
        stage('Run tests') {
            when {
                changeset "**/dashboard-ui/*.*"
            }
            steps {
                echo 'Testing dashboard-ui project'
            }
        }  
        
        stage('Build') {
            when {
                changeset "**/dashboard-ui/*.*"
            }
            steps {
                echo "Building dashboard-ui project. Build number: ${env.BUILD_NUMBER}"
                script {
                    def build = (env.BRANCH_NAME == 'prod') ? 'production' : env.BRANCH_NAME
                    echo "Build =${build}"
                    sh "node --version"
                    sh "npm --version"
                    sh "npm install"
                    echo "Replacing Version Number in the app..."
                    sh "sed -i 's/VERSION_WILL_BE_REPLACED_BY_CICD/#${env.BUILD_NUMBER}/g' src/environments/environment.${env.BRANCH_NAME}.ts"

                    echo "Building the app..."
                    sh "npm run build --configuration=${build}"
                    echo "Build complete"
                }
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
                        sh "python3 /home/jenkins/aws_saml_login.py --idp iam.auckland.ac.nz --user $awsUsername --password $awsPassword --token $awsToken --profile ${awsProfile}"
                    }
                }
            }
        }
  
        stage('Deploy') {
            steps {
                echo "Deploying dashboard-ui to S3 on ${env.BRANCH_NAME}"
                echo "I can use the awsProfile value here... ${awsProfile}"
                echo "Just testing :)"
            }
        }
    }
    
    post {
        success {
            echo "Jenkins job ran successfully. Deployed to ${env.BRANCH_NAME}"
        }
        failure {
            echo 'Jenkins job failed :('
        }
    }
}