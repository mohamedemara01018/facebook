import { createSlice } from "@reduxjs/toolkit";

export const showPostSlice = createSlice({
    name: 'showPostSlice',
    initialState: {
        value: 1,
        state: false
    },
    reducers: {
        set_post_id: (_, action) => {
            return { ...action.payload }
        }
    }
})

export const { set_post_id } = showPostSlice.actions;
export default showPostSlice.reducer