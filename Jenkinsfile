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
        git branch: env.BRANCH_NAME, url: 'https://github.com/asterics/asterics-docs'
      }
    }
    stage('Build') {
      steps {
        sh '''
          npm install
          npm run setup
        '''
      }
    }
    stage('Deploy') {
      steps {
        sh 'ln -sf ./dist asterics-web-devlinux'
        sh 'ln -sf ./dist asterics-web-production'
        script {
          def destination = ""
          if (env.BRANCH_NAME == 'master') {
            destination = 'asterics-web-production'
          } else {
            destination = 'asterics-web-devlinux'
          }
          withCredentials([sshUserPrivateKey(credentialsId: 'studyathome', keyFileVariable: '', passphraseVariable: 'p', usernameVariable: 'u')]) {
            def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: u, password: p, allowAnyHosts: true ]
            sshRemove remote: remote, path: '/var/www/html/' + destination, failOnError: false
            sshPut remote: remote, from: destination, into: '/var/www/html/'
          }
        }
        sh 'rm asterics-web-devlinux'
        sh 'rm asterics-web-production'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}