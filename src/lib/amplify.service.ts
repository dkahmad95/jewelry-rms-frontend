
import { Amplify } from 'aws-amplify';
//TODO: put in env
Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID  || '',
            userPoolClientId: process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID || '',
            identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID || '',
            allowGuestAccess: false,
            signUpVerificationMethod:  'code',
        }
    }
});



// You can get the current config object
const currentConfig = Amplify.getConfig();

const getAmplifyConfig = ()=>{
    return currentConfig;
}

export {getAmplifyConfig}