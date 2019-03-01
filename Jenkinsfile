pipeline {
  agent none
  options { skipDefaultCheckout() }
  environment {
    BRANCH_NAME_DOCS = BRANCH_NAME
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
