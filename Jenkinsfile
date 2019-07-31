pipeline {
  agent any
  environment {
    registry = "docker_hub_account/repository_name"
    registryCredential = "dockerhub"
    REPO = "teamyellow"
    PRIVATE_REPO = "${PRIVATE_REGISTRY}/${REPO}"
  } 
  
  stage('Build') {
    stage('Clone repository') {
        checkout scm
  }
    stage('Build image') {
        app = docker.build("teamyellow/ui")
  }
    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }
    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.*/
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
  }
}
}
