pipeline {
  parameters {
    booleanParam(name: 'deploy', defaultValue: true, description: 'Deploy build to studyathome.technikum-wien.at:8090-8092')
    booleanParam(name: 'deploy_io_exchange', defaultValue: false, description: 'Exchange deployed build to github.io with previous commit')
    password(name: 'GH_TOKEN', defaultValue: '', description: 'Github user token. Note: don\'t use a password, will be logged to console on error. Required for: deploy_io, release.')
    choice(name: 'dest', description: 'Destination/Source folder: studyathome.technikum-wien.at:8090-8092', choices: ['asterics-web-production','asterics-web-devlinux', 'asterics-web-devwindows'])
    // choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    // choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
  }
  // triggers {
  //   // pollSCM('H/15 * * * *')
  //   //cron('* * * * *')
  // }
  agent {
    docker {
      image 'node:10'
      label 'Linux'
    }
  }
  stages {
    stage('Cleanup') {
      steps {
        deleteDir()
      }
    }
    stage('Build') {
          when {
            equals expected: true, actual: params.deploy
          }
          environment {
            FATALITY = true
            VERBOSE = true
            ENDPOINT = "/"
            DOCUMENTATION = "docs-deploy"
            DESTINATION = "dist-deploy"
          }
          steps {
            sh '''
              yarn
              yarn docs init --verbose
              yarn docs setup --verbose
              yarn build
            '''
          }
    }
    stage('Deploy studyathome:8090-8092') {
      when {
        equals expected: true, actual: params.deploy
      }
      environment {
        SERVER = credentials('server')
      }
      steps {
        script {
          def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
          sshRemove remote: remote, path: "/var/www/html/dist-deploy", failOnError: false
          sshRemove remote: remote, path: "/var/www/html/${params.dest}", failOnError: false
          sshPut remote: remote, from: 'dist-deploy', into: "/var/www/html/"
          sshCommand remote: remote, command: "mv /var/www/html/dist-deploy /var/www/html/${params.dest}"
        }
      }
    }
    stage('Deploy: Github IO') {
      when {
        equals expected: true, actual: params.deploy_io_exchange
      }
      environment {
        SERVER = credentials('server')
      }
      steps {
        script {
          def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
          sshCommand remote: remote, command: "DEPLOY_SOURCE=/var/www/html/${params.dest}/ DEPLOY_REPO_PATH=asterics/asterics-docs.git DEPLOY_CNAME=www.asterics.eu DEPLOY_GH_TOKEN=${params.GH_TOKEN} /home/study/deployment-utils/deploy-ghpages.sh"
        }
      }
    }    
  }
}