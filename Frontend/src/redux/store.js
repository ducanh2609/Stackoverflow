import { configureStore } from '@reduxjs/toolkit';
import { allUserSlice } from '../reducers/userReducer';


export const store = configureStore({
    reducer: {
        allUser: allUserSlice.reducer
    }
})