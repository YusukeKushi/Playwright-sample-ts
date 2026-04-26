pipeline {
    agent any
    tools {
        // 設定した名前に合わせる
        nodejs 'NodeJS-24'
    }
    stages {
        stage('Check Version') {
            steps {
                // ここで node コマンドが使えるようになっている！
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
    }
}