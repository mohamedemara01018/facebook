import { configureStore } from "@reduxjs/toolkit";
import  alertSlice  from "./slices/alertSlice";
import loginSlice  from "./slices/loginSlice";
import  logOutSlice  from "./slices/logOutSlice";
import createPostSlice from "./slices/createPostslice";
import showPostSlice  from "./slices/showPostSice";
import  showUserSlice  from "./slices/showUserslice";


export const store =configureStore({
    reducer : {
        alert:alertSlice,
        login:loginSlice,
        logOut:logOutSlice,
        createPost:createPostSlice,
        showPost:showPostSlice,
        showUser:showUserSlice
    }
})