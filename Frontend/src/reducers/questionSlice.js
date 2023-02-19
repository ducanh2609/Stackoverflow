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
export const questionSlice = createSlice({
    name: 'question',
    initialState: {},
    reducers: {
        question: (state, action) => (
            action.payload
        )
    }
})