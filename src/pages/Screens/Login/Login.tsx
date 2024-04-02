'use client'
import {useEffect} from "react";
import LoginForm from "@/UI-Components/login/login-form";
import Logo from "@/UI-Components/sharedComponents/logo";
import {getAmplifyConfig} from "@/lib/amplify.service";

export default function LoginPage() {

    return (
        <main >


                <LoginForm/>


        </main>
    );
}
