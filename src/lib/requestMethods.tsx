'use client'
import axios from "axios";

import {fetchAuthSession} from "@aws-amplify/auth";

const BASE_URL = "https://jewelry-rms-backend1.onrender.com/api";

export const TOKEN = async () => {

    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    if(accessToken)
    {
        
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