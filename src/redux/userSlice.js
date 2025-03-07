import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editUser } from "../api/user";

const initialState = {
    isLogin: false,
    userInfo: {},
}

// edit user info by fetching data
export const editUserInfoAsync = createAsyncThunk(
    "user/editUserInfoAsync",
    async (payload, thunkAPI) => {
        const response = await editUser(payload.id, payload.data)
        // console.log("response: ", response, payload)
        // pass to extraReducers
        return payload;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // init user info
        initUserInfo: (state, {payload}) => {
            state.userInfo = payload;
        },
    },
    // update data to store
    extraReducers: (builder) => {
        builder.addCase(editUserInfoAsync.fulfilled, (state, {payload}) => {
            for(let key in payload){
                state.userInfo[key] = payload[key]
            }
        })
    }
})

export const {initUserInfo} = userSlice.actions;
export default userSlice.reducer;