'use client'
import axios from "axios";

import {fetchAuthSession} from "@aws-amplify/auth";

const BASE_URL = "http://127.0.0.1:8080";

export const TOKEN = async () => {

    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    if(accessToken)
    {
        console.log(accessToken.toString())
        return accessToken.toString()
    }


  
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