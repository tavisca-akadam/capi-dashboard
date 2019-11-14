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
      		        bat(script: 'npm run ng --build --prod')
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