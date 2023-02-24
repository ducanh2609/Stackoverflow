import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {},
    reducers: {
        toast: (state, action) => (
            action.payload
        ),
    }
})