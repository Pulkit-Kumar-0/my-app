pipeline {
    agent any // Runs on any available Jenkins agent

    // Define tools (optional: specify Node.js version)
    tools {
        NodeJs 'Node16' // Assumes you have a Node.js installation named 'Node16' in Jenkins global config
    }

    stages {
        // Stage 1: Checkout code from Git
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Pulkit-Kumar-0/my-app.git' // Replace with your repo URL
            }
        }

        // Stage 2: Install dependencies
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Installs all dependencies from package.json
            }
        }

        // Stage 3: Run tests (optional, placeholder for future tests)
        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false' // Runs tests non-interactively
            }
        }

        // Stage 4: Build the project
        stage('Build') {
            steps {
                sh 'npm run build' // Creates production build in /build folder
            }
        }

        // Stage 5: Deploy (example: copy build to a server or hosting)
        stage('Deploy') {
            steps {
                // Example: Archive the build artifacts
                archiveArtifacts artifacts: 'build/**', fingerprint: true

                // Optional: Add deployment steps here (e.g., to AWS S3, GitHub Pages, etc.)
                echo 'Deploying to production... (Customize this step!)'
                // Example for a server:
                // sh 'scp -r build/* user@your-server:/path/to/deploy'
            }
        }
    }

    // Post-build actions
    post {
        success {
            echo '🎉 Pipeline completed successfully! Ready to rock! 🚀'
        }
        failure {
            echo '😱 Pipeline failed! Time to debug! 🐛'
        }
        always {
            // Clean up workspace (optional)
            cleanWs()
        }
    }
}