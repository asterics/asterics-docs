pipeline {
  agent none
  options { skipDefaultCheckout() }
  stages {
    stage('Trigger: asterics-web') {
      steps {
        build job: 'asterics-web/master'
        build job: 'asterics-web/master', parameters: [[$class: 'StringParameterValue', name: 'key', value: 'value'
      }
    }
  }
}
