pipeline {
    agent {
        docker {
            image 'node' // Specify the base Docker image to use
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Optionally, specify additional Docker container arguments
        }
    }
    
    stages {
        
        
        stage('Build') {
            steps {
                sh 'npm install'
              
            }
        }
        
        stage('Test') {
            steps {
                // Add your testing commands here
                sh 'npm test'
            }
        }
        
        stage('Docker Build & Push') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker build -t rafcasto/techdojo-storybook-app:${env.BUILD_NUMBER} .'
                    sh 'docker push rafcasto/techdojo-storybook-app:${env.BUILD_NUMBER}'
                }
            }
        }
    }
}
