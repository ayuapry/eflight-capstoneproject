import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/AuthSlice'
import { homeReducer } from '../feature/homeSlice'
import homeSlice from '../feature/homeSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        // hero : homeReducer,
        homepage : homeSlice,
        // age : homeReducer,
    },
})