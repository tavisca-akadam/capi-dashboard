pipeline
{
    agent { label 'master' }
    parameters
    {
        string(name: "DOCKER_USER_NAME", description: "Enter Docker hub Username")
        string(name: "DOCKER_PASSWORD", description:  "Enter Docker hub Password")
        string(name: "DOCKER_REPO", defaultValue: "capi_api_key")
        string(name: "BUILD_NAME", defaultValue: "capi_access_key_ui")
        choice(name: "RELEASE_ENVIRONMENT", choices: ["Build","Deploy"], description: "Select what you want to do")
    }
    stages
    {
        stage('Build')
        {
            when
            {
                expression{params.RELEASE_ENVIRONMENT == "Build" || params.RELEASE_ENVIRONMENT == "Deploy"}
            }
            steps
            {
                    bat(script: 'npm install') 
                    bat(script: 'npm audit fix')
      		        bat(script: 'npm run ng build --prod')
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
                bat "docker build --tag=${DOCKER_REPO}:${BUILD_NAME}"    
                bat "docker login -u ${DOCKER_USER_NAME} -p ${DOCKER_PASSWORD}"
                bat "docker push ${DOCKER_USER_NAME}/${DOCKER_REPO}:${BUILD_NAME}"
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