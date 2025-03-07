import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        // you can add more reducer here
    }
})