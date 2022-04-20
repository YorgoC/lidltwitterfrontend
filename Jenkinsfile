pipeline {
    agent any
        environment {
            registry = "https://hub.docker.com/r/yorgoc/lidltwitter"
            registryCredential = 'dockerhub'
            dockerImage = ''
            scannerHome = tool 'sonarqube-scanner'
        }
    stages {
        stage('Initialize'){
            steps {
                
                   echo "PATH = ${PATH}"
                   echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Install') {
      steps { 
          bat 'npm install'
          bat 'npm i @angular/cdk'
          bat 'npm install concurrently --save-dev'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run-script build'
            }
        }

         stage('Unit Testing') {
        steps {
             bat 'npm run test-headless' 
      }
    }
         stage('e2e Testing') {
        steps {
             bat 'npm run cypress:ci' 
      }
    }

      stage('Sonar') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
         stage('Quality Gate') {
            steps{
                timeout(time:1, unit: 'HOURS'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Building image') {
          steps{
            script {
              dockerImage = docker.build("yorgoc/lidltwitter")
            }
          }
        }
        stage('Deploy Image') {
          steps{
            script {
                  docker.withRegistry('https://registry.hub.docker.com/r/yorgoc/lidltwitter', registryCredential) {
                    dockerImage.push('frontend')
                  }
            }
          }
        }
    }
}
