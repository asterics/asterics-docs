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
        git 'https://github.com/asterics/asterics-docs'
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
        script {
          withCredentials([sshUserPrivateKey(credentialsId: 'studyathome', keyFileVariable: '', passphraseVariable: 'k', usernameVariable: 'u')]) {
            def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: u, password: k, allowAnyHosts: true ]
            sshRemove remote: remote, path: '/var/www/html/asterics-web-devlinux', failOnError: false
            sshPut remote: remote, from: './asterics-web-devlinux', into: '/var/www/html/'
          }
        }
        sh 'rm asterics-web-devlinux'
        sh 'cat src/config/config.js'
      }
    }
  }
}