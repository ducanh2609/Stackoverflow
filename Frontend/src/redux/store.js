import { configureStore } from '@reduxjs/toolkit';
import { allUserSlice, userSlice } from '../reducers/userSlice';
import { allQuestionSlice } from '../reducers/questionSlice';

export const store = configureStore({
    reducer: {
        allUser: allUserSlice.reducer,
        user: userSlice.reducer,
        allQuestion: allQuestionSlice.reducer,
    }
})