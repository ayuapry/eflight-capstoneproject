import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getTitel = createAsyncThunk(
    'booking/getTitel',
    async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/titel/all`)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)


export const Booking = createAsyncThunk(
  "user/booking", async (values) => {
      const token =  localStorage.getItem('token');
      const id = localStorage.getItem('id')
      try {
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/booking/${id}`,
          {
              "scheduleId": `${values.scheduleId}`,
              "titelId" : `${values.titelId}`,
              "ageCategoryId" : `${values.ageCategoryId}`,
              "firstName" : `${values.firstName}`,
              "lastName" : `${values.lastName}`,
              "birthDate": `${values.birthDate}`,
              "passportNumber": `${values.passportNumber}`,
              "issuingCountryId": `${values.issuingCountryId}`,
              "citizenshipId": `${values.citizenshipId}`,
              "aircraftSeat": `${values.baggage}`,
              "status": `${values.status}`,
          },
          {
            headers: { 
                'Authorization': `Bearer ${token}`
            },
          },
          )
          localStorage.setItem("id",(res.data.data.id))
          return res.data.data
      } catch (error) {
          // console.error(error.response.data.data)
          return error.response.data.data
      }
  }
)
export const BookingSlice = createSlice({
    name: "booking",
    initialState : {
      titel: [],
      booking: [],
    },
    reducers: {},
    extraReducers: {
      [getTitel.pending]: (state) => {
        state.loading = true;
      },
      [getTitel.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.titel = payload;
      },
      [getTitel.rejected]: (state) => {
        state.loading = false;
      },
      [Booking.pending]: (state) => {
        state.loading = true;
      },
      [Booking.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.booking = payload;
      },
      [Booking.rejected]: (state) => {
        state.loading = false;
      },
    },
  });

  export const bookingReducer = BookingSlice.reducer;
