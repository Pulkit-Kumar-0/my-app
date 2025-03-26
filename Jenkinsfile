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

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
                echo 'Deploying to production... Starting server!'
                dir('build') {
                    sh 'npm install -g serve' // Install serve globally
                    sh 'serve -s . -l 3000 &' // Serve the build folder on port 3000 in the background
                }
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline completed successfully! App is running at http://<VM-IP>:3000 🚀'
        }
        failure {
            echo '😱 Pipeline failed! Time to debug! 🐛'
            cleanWs() // Clean only on failure
        }
        // Remove always { cleanWs() } to preserve the workspace on success
    }
}