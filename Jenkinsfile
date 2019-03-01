pipeline {
  agent none
  options { skipDefaultCheckout() }
  environment {
    BRANCH_NAME = 'sprint-201901-content'
  }
  stages {
    stage('Trigger: asterics-web') {
      steps {
        build 'asterics-web/asterics-docs_sprint-201901-content'
      }
    }
  }
}