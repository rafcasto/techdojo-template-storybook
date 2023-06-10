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
                sh 'npm cache clean --force'
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

        stage('Package') {
            agent {
                docker {
                    image 'node' // Use the desired Node.js version or any other base image
                    registryCredentialsId 'docker-hub-credentials' // Jenkins credentials for Docker Hub
                    args '-v /var/run/docker.sock:/var/run/docker.sock:rw -e NPM_TOKEN=$NPM_TOKEN -u root' // Run the Docker container as root user
                }
            }
            steps {
                 catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){                 
                sh 'npm package'
                sh 'npm publish --access public'               
                 }
                  sh 'npm cache clean --force'
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
                sh 'docker system prune -af'
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
                    args '-v /usr/local/bin/kubectl:/usr/local/bin/kubectl -v /var/jenkins_home/kubconfig.yaml:/root/kubconfig.yaml -u root'   
                }
            }

             environment {
                registry = 'rafcasto'
                credentialsId = 'docker-hub-credentials'
                imageName = 'techdojo-ui-component'
                tag = "${env.BUILD_NUMBER}"
            }
            steps{
                script {
                withEnv(["version=${env.BUILD_NUMBER}"]) {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                   sh 'kubectl delete svc storybook-svc  --kubeconfig=/root/kubconfig.yaml'
                   sh 'kubectl delete   deployment storybook-dep --kubeconfig=/root/kubconfig.yaml'
                     }       
                    sh "sed -i 's|REPO_IMAGE|${registry}/${imageName}:${tag}|' storybook-deployment.yaml"        
                    sh "sed -i 's|JENKINS_NPM_TOKEN|$NPM_TOKEN|' storybook-deployment.yaml"                   
                    sh "kubectl apply -f storybook-deployment.yaml  --kubeconfig=/root/kubconfig.yaml"
                    sh 'kubectl apply -f storybook-service.yaml  --kubeconfig=/root/kubconfig.yaml'
                }
                }
             }
        }
    }
}
