import { configureStore } from '@reduxjs/toolkit';
import { allUserSlice, userSlice } from '../reducers/userSlice';
import { allQuestionSlice, questionSlice } from '../reducers/questionSlice';
import { allAnswerSlice, methodAnswerSlice, valueSlice } from '../reducers/answerSlice';

export const store = configureStore({
    reducer: {
        allUser: allUserSlice.reducer,
        user: userSlice.reducer,
        allQuestion: allQuestionSlice.reducer,
        question: questionSlice.reducer,
        allAnswer: allAnswerSlice.reducer,
        value: valueSlice.reducer,
        methodAnswer: methodAnswerSlice.reducer
    }
})