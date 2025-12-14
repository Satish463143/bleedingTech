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
        sh '''
            if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts.test && !p.scripts.test.includes('no test specified') ? 0 : 1)"; then
            npm test
            else
            echo "Skipping backend tests (no real tests configured)"
            fi
        '''
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
