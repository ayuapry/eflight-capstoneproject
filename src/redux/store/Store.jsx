import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/authSlice'
import { homeReducer } from '../feature/homeSlice'
// import homeSlice from '../feature/homeSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        // hero : homeReducer,
        homepage : homeReducer
        // age : homeReducer,
    },
})