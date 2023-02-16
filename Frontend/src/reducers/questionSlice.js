import { createSlice } from "@reduxjs/toolkit";

export const allQuestionSlice = createSlice({
    name: 'allQuestion',
    initialState: [],
    reducers: {
        allQuestion: (state, action) => (
            action.payload
        )
    }
})
