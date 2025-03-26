pipeline {
    agent any

    tools {
        nodejs 'Node16'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Pulkit-Kumar-0/my-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test -- --watchAll=false'
        //     }
        // }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
                echo 'Deploying to production... (Customize this step!)'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline completed successfully! Ready to rock! 🚀'
        }
        failure {
            echo '😱 Pipeline failed! Time to debug! 🐛'
        }
    }
}