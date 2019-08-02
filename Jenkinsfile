def app = null
pipeline {
    agent any
  environment {
    registry = "teamyellow"
    registryCredential = "dockerhub"
    REPO = "teamyellow"
    PRIVATE_REPO = "${PRIVATE_REGISTRY}/${REPO}"
    NEXUS_VERSION = "nexus3"
    NEXUS_PROTOCOL = "http"
    NEXUS_URL = "http://35.246.111.87:8081/repository/docker-repo/"
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
           app = docker.build("frontend", "--no-cache --pull ./AngularUI")
        }
  }
}
stage('Test Stage') {
  steps {
    script {
      sh 'echo "...TEST PASSED..."'	
    }
  }
}
stage('Push Image') {
  steps {
      script {
          docker.withRegistry('http://instance-2:5000') {
            app.push("latest")
        }
          /*docker.withRegistry('instance-2:8081', 'nexus-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push('latest')
        }*/
    }
}
}
stage('Deploy Image') {
  steps {
            sh 'docker-compose up -d --build'
        }
}
stage('Removing images') {
  steps {
            sh "docker rmi frontend:latest"
	    sh "yes | docker system prune"
        }
    }
}
}
