import { createSlice } from "@reduxjs/toolkit";

export const logOutSlice = createSlice({
    name: "logOutSlice",
    initialState: {
        value: false
    },
    reducers: {
        setLogout: (_, action) => {
            return { value: action.payload }
        }
    }

})

export const { setLogout } = logOutSlice.actions;
export default logOutSlice.reducer