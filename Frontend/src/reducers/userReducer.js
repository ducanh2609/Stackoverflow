import { createSlice } from "@reduxjs/toolkit";

export const allUserSlice = createSlice({
    name: 'allUser',
    initialState: '',
    reducers: {
        allUser: (state, action) => (
            action.payload
        )
    }
})