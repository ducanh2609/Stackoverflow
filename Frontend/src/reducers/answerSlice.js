import { createSlice } from "@reduxjs/toolkit";

export const allAnswerSlice = createSlice({
    name: 'allAnswer',
    initialState: [],
    reducers: {
        allAnswer: (state, action) => (
            action.payload
        ),
        uploadAnswer: (state, action) => (
            [...state, action.payload]
        ),
        delAnswer: (state, action) => (
            state.filter((item) => item.ans_id !== action.payload)
        ),
        updateAnswer: (state, action) => (
            state.map((item) => item.ans_id === action.payload.ans_id ? action.payload : item)
        ),
    }
})

export const valueSlice = createSlice({
    name: 'value',
    initialState: {},
    reducers: {
        value: (state, action) => (
            action.payload
        ),
    }
})

export const methodAnswerSlice = createSlice({
    name: 'medthodAnswer',
    initialState: '',
    reducers: {
        method: (state, action) => (
            action.payload
        ),
    }
})