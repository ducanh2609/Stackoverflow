import { createSlice } from "@reduxjs/toolkit";


export const tagQuesSlice = createSlice({
    name: 'tagQues',
    initialState: '',
    reducers: {
        tagQues: (state, action) => (
            action.payload
        ),
    }
})