pipeline {
  agent any
  options { timestamps() }

  // If your Node tool is configured in Jenkins (Manage Jenkins -> Tools), keep this.
  // If not, delete the whole "tools" block.
  tools { nodejs 'Node 20' }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Frontend-Next: Install') {
      steps {
        dir('frontend-next') {
          sh 'npm ci'
        }
      }
    }
    stage('Frontend-Next: Build') {
      steps {
        dir('frontend-next') {
          sh 'npm run build'
        }
      }
    }

    stage('Deploy Frontend-Next (Docker)') {
        when { anyOf { branch 'master'; branch 'main' } }
        steps {
            sh 'docker-compose -f docker-compose.frontend.yml up -d --build'
        }
    }
  }
}
