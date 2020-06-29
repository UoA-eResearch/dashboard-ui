pipeline {
    agent any

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
                echo 'Building dashboard-ui project'
            }
        }
  
        stage('Deploy') {
            when {
                changeset "**/dashboard-ui/*.*"
            }
            steps {
                echo 'Deploying dashboard-ui to S3 on ' + BRANCH_NAME
            }
        }
    }
    
    post {
        success {
            echo 'Jenkins job ran successfully. Deployed to ' + BRANCH_NAME
        }
        failure {
            echo 'Jenkins job failed :('
        }
    }
}