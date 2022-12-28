import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/AuthSlice'
import { bookingReducer } from '../feature/BookingSlice'
import { historyReducer } from '../feature/historySlice'
import { promoReducer } from '../feature/promoSlice'
import { homeReducer } from '../feature/homeSlice'
import { notifReducer } from '../feature/NotificationSlice'
import { userReducer } from '../feature/UserSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        homepage : homeReducer,
        user: userReducer,
        notification: notifReducer,
        booking: bookingReducer,
        history: historyReducer,
        promo: promoReducer,
    },
})