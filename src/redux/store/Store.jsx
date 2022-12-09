import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/authSlice'
import { homeReducer } from '../feature/homeSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        hero : homeReducer
    }
})