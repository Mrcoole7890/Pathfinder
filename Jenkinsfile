pipeline {
    agent {
        docker {
            image 'node:20.12-alpine'
            args '-p 3000:3000 -u root:root'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}