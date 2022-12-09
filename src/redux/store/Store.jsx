import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/authSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
    }
})