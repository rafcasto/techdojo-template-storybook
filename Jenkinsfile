pipeline {
    agent none
    
    stages {
        stage('Build and Package') {
            agent {
                docker {
                    image 'node' // Choose the appropriate Node.js version
                    args '-p 6006:6006' // Port mapping for Storybook UI (if needed)
                }
            }
            
            environment {
                // Set environment variables if required
                NODE_ENV = 'production'
            }
            
            steps {
            
                sh 'npm install' // Install project dependencies
                
                // Optionally, run any additional build steps, such as tests
                // sh 'npm run test'
                
                sh 'npm run storybook' // Build Storybook
                
                // Package the Storybook build artifacts
                archiveArtifacts artifacts: 'storybook-static/**/*', fingerprint: true
            }
        }
    }
}
