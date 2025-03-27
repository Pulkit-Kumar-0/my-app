pipeline {
    agent any

    tools {
        nodejs 'Node16' // Matches your v16.20.6
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
                // Copy build folder to Nginx directory
                sh 'sudo rm -rf /var/www/html/build/*' // Clear old files
                sh 'sudo cp -r build/* /var/www/html/build/'
                echo 'Deployed to /var/www/html/build. Nginx will serve the updated app.'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline completed successfully! App is live at http://<VM-IP>/ 🚀'
        }
        failure {
            echo '😱 Pipeline failed! Time to debug! 🐛'
        }
    }
}