pipeline {
    agent none 
  

  stages {
    stage('Build') {
         agent {
            docker {
            image 'node' // Use the desired Node.js version or any other base image
            registryCredentialsId 'docker-hub-credentials' // Jenkins credentials for Docker Hub
            args '-v /var/run/docker.sock:/var/run/docker.sock:rw -u root' // Run the Docker container as root user
            }
         }
      steps {
        // Clone your repository or perform any necessary setup steps
        // before building the Docker image
        // For example:
        // git 'https://github.com/your/repository.git'

        // Build the Storybook Docker image
        sh 'npm install'
      }
    }

    stage('Test') {
        agent {
            docker {
            image 'node' // Use the desired Node.js version or any other base image
            registryCredentialsId 'docker-hub-credentials' // Jenkins credentials for Docker Hub
            args '-v /var/run/docker.sock:/var/run/docker.sock:rw -u root' // Run the Docker container as root user
            }
         }
      steps {
       sh 'npm test'
      }
    }

    stage('Publish') {
      agent {
                docker {
                    image 'docker:latest'
                }
            }
            environment {
                registry = 'rafcasto'
                credentialsId = 'docker-hub-credentials'
                imageName = 'techdojo-ui-component'
            }
            steps {
                withCredentials([string(credentialsId: credentialsId, variable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u rafcasto -p $DOCKER_PASSWORD'
                    sh "docker tag $imageName $registry/$imageName:latest"
                    sh "docker push $registry/$imageName:latest"
                }
            }
    }
  }
}