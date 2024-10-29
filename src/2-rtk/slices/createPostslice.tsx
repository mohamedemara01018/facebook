import { createSlice } from "@reduxjs/toolkit";

export const createPostSlice = createSlice({
    name: "createPostSlice",
    initialState: {
        value: false
    },
    reducers: {
        setCreatePost: (_, action) => {
            return { value: action.payload }
        }
    }
})

export const { setCreatePost } = createPostSlice.actions;
export default createPostSlice.reducer