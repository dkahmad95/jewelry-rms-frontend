'use client'
import axios from "axios";
import {AuthService} from "@/lib/auth.service";
import {fetchAuthSession} from "@aws-amplify/auth";

const BASE_URL = "http://localhost:8080/api/";
const authService = new AuthService()
export const TOKEN = async () => {

    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    if(accessToken)
    {
        console.log(accessToken.toString())
        return accessToken.toString()
    }


    // const persistedData = localStorage.getItem("persist:root");
    //
    //
    // if (persistedData) {
    //     const parsedData = JSON.parse(persistedData);
    //     const user = JSON.parse(parsedData?.user || "{}").currentUser || {};
    //     const token = user.token?.split("|")[1];
    //
    //     return token;
    // }
    // return null;
};

export const userRequest = axios.create({
    baseURL: BASE_URL,
});

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


userRequest.interceptors.request.use(
     async (config) => {
        config.headers["Authorization"] = "Bearer " + await TOKEN();
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);