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
const question = (state) => state.question;

export const getQuestion = createSelector([allQuestion, question], (allQuestion, question) => {
    return {
        allQuestion: allQuestion,
        question: question
    }
})

const allAnswer = (state) => state.allAnswer;

export const getAnswer = createSelector([allAnswer], (allAnswer) => {
    return {
        allAnswer: allAnswer
    }
})


const value = (state) => state.value;

export const getValue = createSelector([value], (value) => {
    return {
        value: value
    }
})

const methodAnswer = (state) => state.methodAnswer;

export const getMethod = createSelector([methodAnswer], (methodAnswer) => {
    return {
        methodAnswer: methodAnswer
    }
})

const hpActive = (state) => state.hpActive;

export const getActive = createSelector([hpActive], (hpActive) => {
    return {
        hpActive: hpActive
    }
})