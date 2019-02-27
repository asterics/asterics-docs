pipeline {
  parameters {
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux', 'asterics-web-devwindows', 'asterics-web-production' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin/(.*)', defaultValue: env.BRANCH_NAME, type: 'PT_BRANCH_TAG')
  }
  agent {
    docker {
      image params.image
      label params.agent
    }
  }
  stages {
    stage('Source') {
      steps {
        git branch: env.BRANCH, url: 'https://github.com/asterics/asterics-docs'
      }
    }
    stage('Build') {
      environment {
        VERBOSE = true
      }
      steps {
        sh '''
          npm install
          npm run setup
        '''
      }
    }
    stage('Deploy') {
      environment {
        SERVER = credentials('server')
      }
      steps {
        sh "ln -sf ./asterics-web-vue/dist docs"
        script {
          def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
          sshRemove remote: remote, path: "/var/www/html/${params.destination}/docs", failOnError: false
          sshPut remote: remote, from: 'docs', into: "/var/www/html/${params.destination}"
        }
      }
    }
  }
  post {
    always {
      cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
    }
  }
}