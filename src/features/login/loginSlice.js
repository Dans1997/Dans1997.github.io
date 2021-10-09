import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'login',
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    },
});
  
export const { login } = slice.actions;
  
// Login selectors
export const selectUsername = state => state.login.username;
export const selectPassword = state => state.login.password;
  
export default slice.reducer;