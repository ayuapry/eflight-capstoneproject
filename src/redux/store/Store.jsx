import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from '../feature/AuthSlice'
import { bookingReducer } from '../feature/BookingSlice'
import { historyReducer } from '../feature/historySlice'
import { promoReducer } from '../feature/promoSlice'
import { homeReducer } from '../feature/homeSlice'
import { notifReducer } from '../feature/NotificationSlice'
import { userReducer } from '../feature/UserSlice'
import { adminReducer } from '../feature/AdminSlice'

export default configureStore ({
    reducer: {
        auth : authReducer,
        homepage : homeReducer,
        user: userReducer,
        notification: notifReducer,
        booking: bookingReducer,
        history: historyReducer,
        promo: promoReducer,
        admin: adminReducer,
    },
})