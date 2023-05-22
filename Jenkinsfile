pipeline {
    agent {
        docker {
            image 'node' // Specify the base Docker image to use
            args '-v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw -u root:root' // Optionally, specify additional Docker container arguments
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
                sh 'docker ps'
            }
        }
    }
}
