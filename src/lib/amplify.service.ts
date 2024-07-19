
import { Amplify } from 'aws-amplify';
//TODO: put in env
Amplify.configure({
    Auth: {
        // put the min env
        Cognito: {
            //  Amazon Cognito User Pool ID
            userPoolId:  'eu-west-1_onyNXtmC6',
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolClientId: '1s4dgodfp37knovo8iqq27nq6a',
            // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
            identityPoolId:'eu-west-1:1ce3967f-6a62-4f72-b0e1-66e8d5b43e7b',
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