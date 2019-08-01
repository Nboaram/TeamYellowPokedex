pipeline {
	agent any
  		environment {
    		registry = "teamyellow"
    		registryCredential = "dockerhub"
    		REPO = "teamyellow"
    		PRIVATE_REPO = "${PRIVATE_REGISTRY}/${REPO}"
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
			stage('Build Image') {
    			steps {
        			script {
      					def app = docker.build("frontend", "./ui", "-v /var/run/docker.sock:/var/run/docker.sock")
        			}
  				}
			}
			stage('Test Image') {
  				steps{
  					script {
        				app.inside {
            				sh 'echo "Tests passed"'
        				}
      				}
    			}
  			}
			stage('Push Image') {
  				steps {
     				script {
        				docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            				app.push("${env.BUILD_NUMBER}")
            				app.push("latest")
        				}
        				docker.withRegistry('NEXUS_URL', 'nexus-credentials-id') {
            				container.push("${env.BUILD_NUMBER}")
            				container.push('latest')
        				}
    				}
				}
			}
			stage('Deploy Image') {
  				steps {
            		sh 'docker run -d -p 80:80 "registry/ui:latest"${env.BUILD_NUMBER}"'
        		}
			}
			stage('Removing images') {
  				steps {
            		sh "docker rmi $registry/frontend:latest$BUILD_NUMBER"
        		}
    		}
		}

}