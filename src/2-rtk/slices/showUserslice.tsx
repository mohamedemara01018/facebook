import { createSlice } from "@reduxjs/toolkit";

export const showUserSlice = createSlice({
    name: "showUserSlice",
    initialState: {
        value: 1,
        state: false,
    },
    reducers: {
        set_user_id: (_, action) => {
            return { ...action.payload }
        }
    }
})

export const { set_user_id } = showUserSlice.actions;
export default showUserSlice.reducer;