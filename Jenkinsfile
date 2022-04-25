pipeline {
    environment {
        registry1 = "sarika476/frontend"
        registry2 = "sarika476/backend"
        registry = "sarika476/final_project"
        registryCredential = 'docker-login'
        dockerImage = ''
    }
    agent any

    stages {
        stage('Step 1: Git clone') {
            steps {
                git 'https://github.com/sarika476/MYSOC.git'
            }
        }
        stage('build frontend') {
            steps {
                dir('frontend'){
                	sh 'npm install'
		}
            }
        }
//         stage('test frontend'){
//             steps{
//             	dir('frontend'){
//                 	sh 'npm test'
//             	}
//             }
            
//         }
        stage('test backend') {
            steps {
            	dir('backend'){
                 	sh 'mvn clean test'
                }
            }
        }
        stage('build backend'){
            steps{
            	dir('backend'){
                	sh 'mvn install'
                }
            }
        }
        stage('Building our image') {
            steps{
            
            	dir('frontend'){
            		sh ' docker build -t $registry1'
            	}
            	sh ' docker build -t $registry2'                                
            }
        }
        
        
        
        stage('Deploy our image') {
            steps{
                sh 'docker push $registry:$registry1'
                sh 'docker push $registry:$registry2'
            }
        }
        
    }
}
