import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        user: {

        },
        token: ''
    },
    reducers: {
        setUser: (_, action) => {
            return { ...action.payload }
        }
    }
})

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;