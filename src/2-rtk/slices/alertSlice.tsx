import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: 'alertSlice',
    initialState: {
        title: '',
        mes: '',
        type: false,
    },
    reducers: {
        setAlert: (_, action) => {
            // console.log(action)
            return { ...action.payload }
        }
    }
})

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer