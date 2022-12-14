import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/authSlice'
import { bookingReducer } from '../feature/BookingSlice'
import { homeReducer } from '../feature/homeSlice'
import { notifReducer } from '../feature/NotificationSlice'
import { userReducer } from '../feature/UserSlice'
// import homeSlice from '../feature/homeSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        // hero : homeReducer,
        homepage : homeReducer,
        // age : homeReducer,
        // profile: authReducer,
        user: userReducer,
        notification: notifReducer,
        booking: bookingReducer,
    },
})