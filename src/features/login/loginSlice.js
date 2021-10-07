import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'login',
    initialState: {
        username: 'username1',
        password: 'password1'
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    },
});
  
export const { login } = slice.actions;
  
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsername = state => state.login.username;
export const selectPassword = state => state.login.password;
  
export default slice.reducer;