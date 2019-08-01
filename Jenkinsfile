pipeline {
	agent any
  		environment {
			customImage = "docker.build("frontend", "./ui")"
			registry = "teamyellow"
    			registryCredential = "dockerhub"
    			NEXUS_VERSION = "nexus3"
    			NEXUS_PROTOCOL = "http"
    			NEXUS_URL = "35.246.111.87:8081"
    			NEXUS_REPOSITORY = "docker-repo"
    			NEXUS_CREDENTIAL_ID = "nexus-credentials"
  		}
		stages{  
			stage('Clone repository') {
  				steps {
        				checkout scm
  				}
			}
			stage('Docker permissions') {
     				steps {
            				script {
            					sh 'whoami'
            					sh 'sudo usermod -aG docker jenkins'
            				}
        			}
    			}
			stage('Build Image') {
    				steps {
        				script {
      						def customImage = docker.build("frontend", "./ui")
        				}
				}
			}
			stage('Test Image') {
  				steps{
  					script {
        					app.inside {
								def nodeVersion = sh 'node -v'
								def angularVersion = sh 'angular -v'
								if(nodeVersion == "v12.7.0" && angularVersion = "8.2.0"){
								sh 'echo "Test Passed"'
							} else {
            							sh 'echo "Test Failed"'
							}
						}
        				}
      				}
    			}
			stage('Push Image') {
  				steps {
     					script {
        					docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            						customImage.push("latest")
        					}
        					docker.withRegistry('NEXUS_URL', 'nexus-credentials-id') {
            						customImage.push("${env.BUILD_NUMBER}")
           						customImage.push('latest')
        					}
					}
    				}
			}
			stage('Deploy Image') {
  				steps {
            				sh 'docker run -d -p 80:80 registry/frontend:latest'
        			}
			}
			stage('Removing Images') {
  				steps {
            				sh 'docker rmi registry/frontend:latest'
        			}
    			}
		}

}
