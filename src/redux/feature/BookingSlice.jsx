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

export const postBooking = createAsyncThunk(
  'btnBooking/postBooking',
  async () => {
      const token =  localStorage.getItem('token')
      const id = localStorage.getItem('id')
      try {
          const res = await axios.post(`https://binar-air-rest-api-production.up.railway.app/api/v1/booking/userid=${id}`, 
          {
            

          },
          {
              headers: { 
                  'Authorization': `Bearer ${token}`
              },  
          })
          // console.log(res.data.data);
          console.log(res.data)
          return res.data.data
      } catch (err) {
          console.log(err)
      }
  }
)

export const BookingSlice = createSlice({
    name: "booking",
    initialState : {
      titel: [],
      btnBooking: [],
      
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
      [postBooking.fulfilled]: (state, { payload }) => {
        state.btnBooking = payload;
      },
    },
  });

  export const bookingReducer = BookingSlice.reducer;
