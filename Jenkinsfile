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
        build job: 'asterics-web/master', parameters: [[$class: 'StringParameterValue', name: 'para', value: 'Hello World'], [gitParameter, name: 'BRANCH_WEBACS', value: 'alija/feature/webpack']]
      }
    }
  }
}
