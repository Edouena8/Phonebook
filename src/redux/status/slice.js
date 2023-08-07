import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: 'status',
    initialState: 'add',
    reducers: {
        clickModalBtn(state, actions) {
            return state = actions.payload;
        },
    },
});

export const { clickModalBtn } = statusSlice.actions;