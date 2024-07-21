import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
      identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID || "",
      allowGuestAccess: process.env.NEXT_PUBLIC_ALLOW_GUEST_ACCESS === "true",
      signUpVerificationMethod: process.env
        .NEXT_PUBLIC_SIGN_UP_VERIFICATION_METHOD as "code" | "link",
    },
  },
});

// You can get the current config object
const currentConfig = Amplify.getConfig();

const getAmplifyConfig = () => {
  return currentConfig;
};

export { getAmplifyConfig };
