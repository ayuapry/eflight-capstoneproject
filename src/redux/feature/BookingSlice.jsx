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

export const getBagage = createAsyncThunk(
  "user/getBagage", async (id) => {
      const token =  localStorage.getItem('token');
    //   const id = localStorage.getItem('id')
      try {
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/bagage/?aircraftId=${id}`,
          {
              headers: { 
                  'Authorization': `Bearer ${token}`
              },
          }
          )
        //   console.log(res)
          return res.data.data
      } catch (error) {
          console.error(error)
          return error.response.data.data
      }
  }
)

export const getSeat = createAsyncThunk(
  "user/getSeat", async (id) => {
      const token =  localStorage.getItem('token');
      try {
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/aircraftseat?aircraftid=${id}`,
          {
              headers: { 
                  'Authorization': `Bearer ${token}`
              },
          }
          )
          console.log(res)
          return res.data.data
      } catch (error) {
          console.error(error)
          return error.response.data.data
      }
  }
)

export const getBenefit = createAsyncThunk(
    "user/getBenefit", async (id) => {
        const token =  localStorage.getItem('token');
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/benefit/?aircraftid=${id}`,
            {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            }
            )
            console.log(res)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
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
      btnBooking: [],
      bagage: [],
      benefit: [],
      seat: []
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
      [getBagage.pending]: (state) => {
        state.loading = true;
      },
      [getBagage.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.bagage = payload;
      },
      [getBagage.rejected]: (state) => {
        state.loading = false;
      },
      [getBenefit.pending]: (state) => {
        state.loading = true;
      },
      [getBenefit.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.benefit = payload;
      },
      [getBenefit.rejected]: (state) => {
        state.loading = false;
      },
      [getSeat.pending]: (state) => {
        state.loading = true;
      },
      [getSeat.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.seat = payload;
      },
      [getSeat.rejected]: (state) => {
        state.loading = false;
      },
    },
  });

  export const bookingReducer = BookingSlice.reducer;
