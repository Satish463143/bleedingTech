pipeline {
  agent any
  options { timestamps() }

  // Requires NodeJS plugin + tool named exactly "Node 20"
  tools { nodejs 'Node 20' }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Backend - Install') {
      steps {
        dir('backend') {
          sh 'npm ci'
        }
      }
    }

    stage('Backend - Test') {
      steps {
        dir('backend') {
          sh 'npm test --if-present'
        }
      }
    }

    stage('Frontend-Next - Install') {
      steps {
        dir('frontend-next') {
          sh 'npm ci'
        }
      }
    }

    stage('Frontend-Next - Build') {
      steps {
        dir('frontend-next') {
          sh 'npm run build'
        }
      }
    }
  }
}
