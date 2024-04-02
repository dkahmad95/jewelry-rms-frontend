
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            //  Amazon Cognito User Pool ID
            userPoolId: process.env.COGNITO_USER_POOL_ID || '',
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID ||'',
            // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
            identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID ||'',
            // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
            allowGuestAccess: false,
            // OPTIONAL - This is used when autoSignIn is enabled for auth.signUp
            // 'code' is used for auth.confirmSignUp, 'link' is used for email link verification
            signUpVerificationMethod: 'code', // 'code' | 'link'
        }
    }
});



// You can get the current config object
const currentConfig = Amplify.getConfig();

const getAmplifyConfig = ()=>{
    return currentConfig;
}

export {getAmplifyConfig}