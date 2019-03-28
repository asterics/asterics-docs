pipeline {
  parameters {
    booleanParam(name: 'deploy', defaultValue: true, description: 'Deploy build to studyathome')
    booleanParam(name: 'deploy_io', defaultValue: false, description: 'Deploy build to github.io')
    booleanParam(name: 'deploy_io_exchange', defaultValue: false, description: 'Exchange deployed build to github.io with previous commit')
    booleanParam(name: 'store', defaultValue: false, description: 'Store build')
    booleanParam(name: 'release', defaultValue: false, description: 'Release build')
    password(name: 'GH_TOKEN', defaultValue: '', description: 'Github user token. Note: don\'t use a password, will be logged to console on error.')
    choice(name: 'dest', description: 'Destination folder', choices: ['asterics-web-devlinux/docs', 'asterics-web-devwindows/docs', 'asterics-web-production/docs' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
  }
  triggers {
    // pollSCM('H/15 * * * *')
    pollSCM('* * * * *')
  }
  agent none
  stages {
    stage('Cleanup') {
      agent {
        label params.agent
      }
      steps {
        deleteDir()
      }
    }
    stage('Build') {
      parallel {
        stage('Build for Release/Store') {
          when { 
            anyOf { 
              equals expected: true, actual: params.release
              equals expected: true, actual: params.store
            }
          }
          agent {
            docker {
              image params.image
              label params.agent
            }
          }
          environment {
            FATALITY = true
            VERBOSE = true
            ENDPOINT = ""
            DOCUMENTATION = "docs"
            DESTINATION = "dist"
          }
          steps {
            sh '''
              yarn install
              yarn setup
            '''
          }
        }
        stage('Build for Deployment') {
          when {
            equals expected: true, actual: params.deploy
          }
          agent {
            docker {
              image params.image
              label params.agent
            }
          }
          environment {
            FATALITY = true
            VERBOSE = true
            ENDPOINT = "docs"
            DOCUMENTATION = "docs-deploy"
            DESTINATION = "dist-deploy"
          }
          steps {
            sh '''
              yarn install
              yarn setup
            '''
          }
        }
        stage('Build for Github IO') {
          when {
            equals expected: true, actual: params.deploy_io
          }
          agent {
            docker {
              image params.image
              label params.agent
            }
          }
          environment {
            FATALITY = true
            VERBOSE = true
            ENDPOINT = "asterics-docs"
            DOCUMENTATION = "docs-deploy-io"
            DESTINATION = "dist-deploy-io"
          }
          steps {
            sh '''
              yarn install
              yarn setup
            '''
          }
        }
      }
    }
    stage('Prepare') {
      when { 
        anyOf { 
          equals expected: true, actual: params.release
          equals expected: true, actual: params.store
        }
      }
      agent {
        label params.agent
      }
      steps {
        sh 'cd dist && zip -r ../asterics-docs.zip *'
      }
    }
    stage('Output') {
      parallel {
        stage('Deploy') {
          when {
            equals expected: true, actual: params.deploy
          }
          agent {
            label params.agent
          }
          environment {
            SERVER = credentials('server')
          }
          steps {
            sh '''
              mkdir build
              ln -s ../dist-deploy build/docs
            '''
            script {
              def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
              sshRemove remote: remote, path: "/var/www/html/${params.dest}", failOnError: false
              sshPut remote: remote, from: 'build/docs', into: "/var/www/html/${params.dest.replace("/docs", "")}"
            }
          }
        }
        stage('Deploy: Github IO') {
          when {
            equals expected: true, actual: params.deploy_io
          }
          agent {
            label params.agent
          }
          steps {
            sh '''
              git clone -b gh-pages --single-branch https://github.com/asterics/asterics-docs.git gh-pages
            '''
            script {
              if (params.deploy_io_exchange) {
                sh 'cd gh-pages && git reset --hard HEAD~1'
              }
            }
            sh '''
              rm -rf gh-pages/*
              cp -r dist-deploy-io/* gh-pages/
              cd gh-pages
              git add *
              git -c user.name='Mr. Jenkins' -c user.email='studyathome@technium-wien.at' commit -m 'docs: release asterics-docs'
              git push https://$GH_TOKEN@github.com/asterics/asterics-docs.git
            '''
          }
        }
        stage('Store') {
          when {
            equals expected: true, actual: params.store
          }
          agent {
            label params.agent
          }
          environment {
            DESTINATION = "dist"
          }
          steps {
            archiveArtifacts artifacts: 'asterics-docs.zip', fingerprint: true
            archiveArtifacts artifacts: "$DESTINATION/build.json", fingerprint: true
          }
        }
        stage('Release') {
          when {
            // branch 'master'
            // changeset 'assets'
            equals expected: true, actual: params.release
          }
          agent {
            docker {
              image params.image
              label params.agent
            }
          }
          environment {
            GIT_BRANCH = "$BRANCH"
          }
          steps {
            sh '''
              git checkout $BRANCH
              git pull
              rm -rf src/external/* .git/modules/src/external/*
              yarn release:prepare
              yarn release --branch $BRANCH
            '''
          }
        }
      }
    }
  }
}