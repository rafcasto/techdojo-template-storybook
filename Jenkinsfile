pipeline {
  agent {
    docker {
      image 'node' // Use the desired Node.js version or any other base image
      registryCredentialsId 'docker-hub-credentials' // Jenkins credentials for Docker Hub
      args '-u root' // Run the Docker container as root user
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
        sh 'docker build -t your-username/storybook .'
      }
    }

    stage('Test') {
      steps {
        // Run any necessary tests or checks on the Docker image
        // For example:
        // sh 'docker run your-username/storybook npm run test'
      }
    }

    stage('Publish') {
      steps {
        // Tag the Docker image with the desired version
        sh 'docker tag your-username/storybook your-username/storybook:latest'

        // Push the Docker image to Docker Hub
        sh 'docker push your-username/storybook:latest'
      }
    }
  }
}
