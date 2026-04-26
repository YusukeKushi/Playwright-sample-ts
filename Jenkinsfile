pipeline {
    agent any
    tools {
        nodejs 'NodeJS-24'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Test') {
            steps {
                // テスト結果を allure-results フォルダに出力するように設定しておく
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            // テストが成功しても失敗してもレポートを生成する
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']] // Playwrightの出力先を指定
            ])
        }
    }
}