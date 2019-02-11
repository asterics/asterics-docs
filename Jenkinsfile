pipeline {
  agent {
    node {
      label 'Linux'
    }
  }
  stages {
    stage('Source') {
      steps {
        sh 'echo Source'
      }
    }
    stage('Build') {
      steps {
        sh 'echo Build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo Deploy'
      }
    }
  }
}