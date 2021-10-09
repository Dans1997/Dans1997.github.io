import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import searchReducer from '../features/search/searchSlice'

const store = configureStore({
    reducer: {
		login: loginReducer,
		search: searchReducer
	},
})

export default store;