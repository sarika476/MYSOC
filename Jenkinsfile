pipeline {
    environment {
        registry1 = "manthan0112/frontend"
        registry2 = "manthan0112/backend"
        registry = "manthan0112/final_project"
        registryCredential = 'dockerhub_id'
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
            		sh ' docker build -t $registry1 .'
            	}
            	sh ' docker build -t $registry2 .'                                
            }
        }
        
        
        stage('Deploy our image') {
            steps{
		    withDockerRegistry([ credentialsId: registryCredential, url: "" ]) {sh 'docker push $registry1'}
		    withDockerRegistry([ credentialsId: registryCredential, url: "" ]) {sh 'docker push $registry2'}
            }
        }
	    
	stage('Cleaning up') {
            steps{
                sh "docker rmi $registry1"
		sh "docker rmi $registry2"
            }
        }
        
        
        stage('Ansible Deploy') {
            steps {
               
                ansiblePlaybook colorized: true, disableHostKeyChecking: true, installation: 'Ansible', inventory: 'inventory', playbook: 'p2.yml'

            }
        }
        
    }
}
