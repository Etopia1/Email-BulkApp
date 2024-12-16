// src/redux/emailSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Email slice to manage emails
const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: [],  // Store emails in an array
    token : "",
    userData :{},
    allSelected: false,  // Keep track of whether all emails are selected
  },
  reducers: {
    addEmail: (state, action) => {
      state.emails.push({ value: action.payload, checked: false });
    },
    AllData: (state, action) => {
      state.userData = action.payload;
    },
    Addtoken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.userData = {};
      state.token = "";
    },
    removeEmail: (state, action) => {
      state.emails = state.emails.filter(email => email.value !== action.payload);
    },
    toggleEmail: (state, action) => {
      const email = state.emails.find(e => e.value === action.payload);
      if (email) email.checked = !email.checked;
    },
    selectAllEmails: (state) => {
      const allSelected = !state.allSelected;
      state.allSelected = allSelected;
      state.emails.forEach(email => email.checked = allSelected);
    },
    deselectAllEmails: (state) => {
      state.allSelected = false;
      state.emails.forEach(email => email.checked = false);
    },
  },
});

export const { addEmail, removeEmail, AllData, clearUser,  toggleEmail, selectAllEmails, deselectAllEmails, Addtoken } = emailSlice.actions;
export default emailSlice.reducer;
