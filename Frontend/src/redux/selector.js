import { createSelector } from "@reduxjs/toolkit";


const allUser = (state) => state.allUser;



export const getUser = createSelector([allUser], (allUser) => {
    return {
        allUser: allUser
    }
})