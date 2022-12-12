import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/AuthSlice'
import { bookingReducer } from '../feature/BookingSlice'
import { homeReducer } from '../feature/homeSlice'
import { notifReducer } from '../feature/NotificationSlice'
// import homeSlice from '../feature/homeSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        // hero : homeReducer,
        homepage : homeReducer,
        // age : homeReducer,
        profile: authReducer,
        notification: notifReducer,
        booking: bookingReducer,
    },
})