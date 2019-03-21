
pipeline {
  parameters {
    booleanParam(name: 'release', defaultValue: false, description: 'Release build')
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux/docs', 'asterics-web-devwindows/docs', 'asterics-web-production/docs' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
    // gitParameter(name: 'BRANCH_ASTERICS', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'AsTeRICS')
  }
  triggers {
    pollSCM('H/15 * * * *')
  }
  agent {
    docker {
      image params.image
      label params.agent
    }
  }
  stages {
    stage('Release') {
      input {
        message "Should the build be release on Github?"
        parameters {
          string(name: 'RELEASE_TAG', defaultValue: 'Mr Jenkins', description: 'Version/Tag')
          text(name: 'RELEASE_NOTES', defaultValue: '', description: 'Release Notes')
          // booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')
          // choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')
          // password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')
          // file(name: "FILE", description: "Choose a file to upload")
        }
      }
      steps {
        echo "Release Tag: ${RELEASE_TAG}"
        echo "Release Notes:\n${RELEASE_NOTES}"
        // echo "Hello ${PERSON}"
        // echo "Biography: ${BIOGRAPHY}"
        // echo "Toggle: ${TOGGLE}"
        // echo "Choice: ${CHOICE}"
        // echo "Password: ${PASSWORD}"
      }
    }
    // stage('Build') {
    //   environment {
    //     VERBOSE = true
    //     ENDPOINT = "docs"
    //   }
    //   steps {
    //     sh '''
    //       yarn install
    //       yarn setup
    //     '''
    //   }
    // }
    // stage('Deploy') {
    //   environment {
    //     SERVER = credentials('server')
    //   }
    //   steps {
    //     sh '''
    //       mkdir build
    //       mv dist build/docs
    //     '''
    //     script {
    //       def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
    //       sshRemove remote: remote, path: "/var/www/html/${params.destination}", failOnError: false
    //       sshPut remote: remote, from: 'build/docs', into: "/var/www/html/${params.destination.replace("/docs", "")}"
    //     }
    //   }
    // }
  }
  // post {
  //   always {
  //     cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
  //   }
  // }
}