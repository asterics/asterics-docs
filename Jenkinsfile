pipeline {
  agent {
    docker {
      image 'node:10'
      label 'Linux'
    }
  }
  stages {
    stage('Source') {
      steps {
        sh '''
          echo Source
          node -v
        '''
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