import {
    getCurrentUser,
    signIn,
    SignInOutput,
    signUp,
    confirmSignUp,
    resetPassword,
    confirmResetPassword,
    signOut as logOut, fetchAuthSession
} from "@aws-amplify/auth";

export class AuthService{

    async  getIdToken() {
        try {
            const {  idToken } = (await fetchAuthSession()).tokens ?? {};
            return idToken
        } catch (e) {
            console.log('failed to get Id token',e);
            throw e;
        }
    }


    async getAuthenticatedUser(){
        try {
            const user= await getCurrentUser();
            return user
        }catch (e) {
            console.log('failed to get authenticated user',e);
            throw e;
        }
    }

    async forgetPassword(_username:string){
        try {
            const data = await resetPassword({
                username:_username
            });
            console.log(data);
            return data

        } catch (e) {
            console.log('failed to confirm user name',e);
            throw e;
        }
    }

    async setNewPassword(_userName:string,_confirmationCode:string,_newPassword:string)
    {
        try {
            const res =  await confirmResetPassword({
                username:_userName,
                confirmationCode:_confirmationCode,
                newPassword:_newPassword
            });
            return res;
        }catch (e) {
            console.log('failed to set a new password',e);
            throw e;
        }
    }

    async userLogin(username:string,password:string):Promise<SignInOutput | undefined>{
        try {
            const res:SignInOutput = await signIn({ username, password });
            return res

        }catch (e) {
            console.log('failed to log in',e);
            throw e;
        }
    }

    async userSignUp({_username,_password,_email,_name,_country,_city,_phoneNumber}:{_username:string,_password:string,_email:string,_name:string,_country:string, _city:string,_phoneNumber:string}){
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username:_username,
                password:_password,
                options: {
                    userAttributes: {
                        email:_email,
                        name:_name,
                        address:`${_country}-${_city}`,
                        'custom:phoneNumber':_phoneNumber
                    },
                    autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
                }
            });

            return{
                isSignUpComplete,
                userId,
                nextStep
            }
        }catch (e) {
            console.log('Failed to sign up',e);
            throw e;
        }
    }

    async confirmSignUp(_username:string,_confirmationCode:string)
    {
        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username:_username,
                confirmationCode:_confirmationCode
            });

            return {
                isSignUpComplete,
                nextStep
            }

        } catch (e) {
            console.log('failed to confirming sign up',e);
                throw e;
        }

    }

    async signOut (){
        try {
            const res = await logOut({global:true})
            return res;
        }catch (e) {
            console.log('failed to sign out',e);
            throw e;
        }
    }
}