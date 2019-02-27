pipeline {
  agent none
  options { skipDefaultCheckout() }
  environment {
    BRANCH_NAME = 'master'
  }
  stages {
    stage('Trigger: asterics-web') {
      steps {
        build 'asterics-web/master'
      }
    }
  }
}