pipeline {
  parameters {
    choice(name: 'deploy_selection', description: 'Build and deploy build to studyathome.technikum-wien.at:8090-8092 or Deploy from studyathome.technikum-wien.at to github.io', choices: ['studyathome.technikum-wien.at','github.io'])
    // booleanParam(name: 'deploy', defaultValue: true, description: 'Deploy build to studyathome.technikum-wien.at:8090-8092')
    // booleanParam(name: 'deploy_io_exchange', defaultValue: false, description: 'Exchange deployed build to github.io with previous commit')
    choice(name: 'GH_TOKEN_ID', description: 'Id of github user token credential stored in Jenkins credentials. Required for deployent to github.io', choices:['GH-TOKEN-DEINHOFER'])
    choice(name: 'dest', description: 'Destination/Source folder: studyathome.technikum-wien.at:8090-8092, The ports map to the choices in the given order', choices: ['asterics-web-production','asterics-web-devlinux', 'asterics-web-devwindows'])
    // choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    // choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
  }
  triggers {
    // pollSCM('H/15 * * * *')
    //should be trigger from 6 to 18 every 6hours (at 6h at 12h at 18h)
    cron('0 6-18/6 * * *')
  }
  agent none
  stages {
    stage('Cleanup') {
      agent {
        label 'Linux'
      }
      steps {
        deleteDir()
      }
    }
    stage('Build') {
          when {
            equals expected: 'studyathome.technikum-wien.at', actual: params.deploy_selection
          }
          agent {
            docker {
              image 'node:10'
              label 'Linux'
            }
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
        equals expected: 'studyathome.technikum-wien.at', actual: params.deploy_selection
      }
      agent {
        label 'Linux'
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
        equals expected: 'github.io', actual: params.deploy_selection
      }
      agent {
        label 'Linux'
      }
      environment {
        SERVER = credentials('server')
        GH_TOKEN=credentials("${params.GH_TOKEN_ID}")
      }
      steps {
        script {
          def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
          sshCommand remote: remote, command: "DEPLOY_SOURCE=/var/www/html/${params.dest}/ DEPLOY_REPO_PATH=asterics/asterics-docs.git DEPLOY_CNAME=www.asterics.eu DEPLOY_GH_TOKEN=${GH_TOKEN} /home/study/deployment-utils/deploy-ghpages.sh"
        }
      }
    }    
  }
  // post {
  //     failure {
  //         mail to: studyathome@technikum-wien.at, subject: "The asterics-docs Pipeline with build id ${BUILD_ID} failed :("
  //     }
  //     success {
  //         mail to: studyathome@technikum-wien.at, subject: "The asterics-docs Pipeline with build id ${BUILD_ID} was successful :-)"
  //     }      
  // }  
}