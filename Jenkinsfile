pipeline {
  parameters {
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux/docs', 'asterics-web-devwindows/docs', 'asterics-web-production/docs' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
    gitParameter(name: 'BRANCH_ASTERICS', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepostiroy: 'AsTeRICS')
  }
  agent {
    docker {
      image params.image
      label params.agent
    }
  }
  stages {
    // stage('Source') {
    //   steps {
    //     git branch: env.BRANCH, url: 'https://github.com/asterics/asterics-docs'
    //   }
    // }
    stage('Build') {
      environment {
        VERBOSE = true
      }
      steps {
        sh '''
          yarn install
          yarn setup
        '''
      }
    }
    stage('Deploy') {
      environment {
        SERVER = credentials('server')
      }
      steps {
        sh "ln -sf dist docs"
        script {
          def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
          sshRemove remote: remote, path: "/var/www/html/${params.destination}", failOnError: false
          sshPut remote: remote, from: 'docs', into: "/var/www/html/${params.destination}"
        }
      }
    } f8
  }
  post {
    always {
      cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
    }
  }
}
