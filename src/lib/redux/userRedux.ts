'use client'
import { createSlice } from "@reduxjs/toolkit";
import {AuthService} from "@/lib/auth.service";



const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        isAuth:false,
        authGot:false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        },


        setIsAuth:(state,action)=>{
            console.log("get if user is auth")
            console.log(action.payload)
            state.isAuth = action.payload
        },

        setIsAuthGot:(state) =>{
            state.authGot =true
        }
    },

});

export const { loginStart, loginSuccess, loginFailure, logout,setIsAuth,setIsAuthGot } =
    userSlice.actions;
export default userSlice.reducer;
