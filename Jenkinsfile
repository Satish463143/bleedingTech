pipeline {
  agent any
  options { timestamps() }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps { sh 'npm ci' }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}
