import { createSlice } from '@reduxjs/toolkit';

export const hpActiveSlice = createSlice({
    name: 'hp-active',
    initialState: null,
    reducers: {
        hpActive: (state, action) => (
            action.payload
        )
    }
})