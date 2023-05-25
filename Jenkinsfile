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
                    args '-v /var/run/docker.sock:/var/run/docker.sock:rw -v /usr/bin/docker:/usr/bin/docker:rw -u root:root'  
                }
            }
            environment {
                registry = 'rafcasto'
                credentialsId = 'docker-hub-credentials'
                imageName = 'techdojo-ui-component'
            }
            steps {
                sh "docker build -t $registry/$imageName:${env.BUILD_NUMBER} ." // Build Docker image
    
                script {
                    dockerImage = docker.build "$registry/$imageName:${env.BUILD_NUMBER}"
                    docker.withRegistry('', credentialsId) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy'){
            agent {
                docker {
                    image 'docker:latest'
                    args '-v /usr/local/bin/kubectl:/usr/local/bin/kubectl'   
                }
            }
            steps{
                script {
                withEnv(["version=${env.BUILD_NUMBER}"]) {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl delete svc storybook-svc -n storybook --kubeconfig=/var/jenkins_home/kubconfig.yaml'
                   sh 'kubectl delete -n storybook  deployment storybook-dep --kubeconfig=/var/jenkins_home/kubconfig.yaml'
                     }
                    sh 'kubectl apply -f storybook-deployment.yaml -n storybook --kubeconfig=/var/jenkins_home/kubconfig.yaml'
                    sh 'kubectl apply -f storybook-service.yaml -n storybook --kubeconfig=/var/jenkins_home/kubconfig.yaml'
                }
                }
             }
        }
    }
}
