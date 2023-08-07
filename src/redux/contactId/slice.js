import { createSlice } from "@reduxjs/toolkit";

export const contactIdSlice = createSlice({
    name: 'contactId',
    initialState: null,
    reducers: {
        saveContactId(state, action) {
            return state = action.payload;
        }
    }
});

export const { saveContactId } = contactIdSlice.actions;