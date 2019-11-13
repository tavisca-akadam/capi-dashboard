pipeline
{
    agent { label 'master' }
    parameters
    {
        choice(name: "RELEASE_ENVIRONMENT", choices: ["Build","Deploy"], description: "Select what you want to do")
    }
    stages
    {
        stage('Build')
        {
            when
            {
                expression{params.RELEASE_ENVIRONMENT == "Build"}
            }
            steps
            {
                    bat(script: 'npm install') 
                    bat(script: 'npm audit fix')
      		    bat(script: 'npm run ng -- build --prod')
            }
        }
        stage('Deploy')
        {
            when
            {
                expression{params.RELEASE_ENVIRONMENT == "Deploy"}
            }
            steps
            {                    
                powershell "Copy-Item EMS.Core/bin/Debug/netcoreapp2.2/publish/* infra/docker/ -Recurse"
                bat "docker build infra/docker/ --tag=${DOCKER_REPO}:${BUILD_NUMBER}"    
                bat "docker login -u ${DOCKER_USER_NAME} -p ${DOCKER_PASSWORD}"
                bat "docker tag ${DOCKER_REPO}:${BUILD_NUMBER} ${DOCKER_USER_NAME}/${DOCKER_REPO}:${BUILD_NUMBER}"
                bat "docker push ${DOCKER_USER_NAME}/${DOCKER_REPO}:${BUILD_NUMBER}"
            }
        }
    }
    post
    {
        success
        {
            deleteDir()
        }
    }
}