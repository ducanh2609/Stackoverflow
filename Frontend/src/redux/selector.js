import { createSelector } from "@reduxjs/toolkit";


const allUser = (state) => state.allUser;
const user = (state) => state.user;
export const getUser = createSelector([allUser, user], (allUser, user) => {
    return {
        allUser: allUser,
        user: user
    }
})

const allQuestion = (state) => state.allQuestion;
export const getQuestion = createSelector([allQuestion], (allQuestion) => {
    return {
        allQuestion: allQuestion,
    }
})