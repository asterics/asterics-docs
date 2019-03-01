pipeline {
  agent none
  options { skipDefaultCheckout() }
  environment {
    BRANCH_NAME_DOCS = "${env.BRANCH_NAME}"
    BRANCH_NAME = 'master'
  }
  stages {
    stage('Trigger: asterics-web') {
      steps {
        build 'asterics-web/asterics-docs_sprint-201901-content'
      }
    }
  }
}
