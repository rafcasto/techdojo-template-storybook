pipeline {
  agent {
    docker {
      image 'node' // Use the desired Node.js version or any other base image
      registryCredentialsId 'docker-hub-credentials' // Jenkins credentials for Docker Hub
      args '-v /var/run/docker.sock:/var/run/docker.sock -u root' // Run the Docker container as root user
    }
  }

  stages {
    stage('Build') {
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
      steps {
       sh 'npm test'
      }
    }

    stage('Publish') {
      steps {
        sh 'docker build -t rafcasto/storybook .'
        // Tag the Docker image with the desired version
        sh 'docker tag rafcasto/storybook rafcasto/storybook:latest'

        // Push the Docker image to Docker Hub
        sh 'docker push rafcasto/storybook:latest'
      }
    }
  }
}
