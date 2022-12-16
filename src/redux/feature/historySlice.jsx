import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Hero
export const getHistory = createAsyncThunk(
    'history/getHistory',
    async () => {
        const token =  localStorage.getItem('token')
        const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/history?userid=${id}&sort=DESC`, {
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

export const postCheckin = createAsyncThunk(
    "user/postCheckin", async (values) => {
        // const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/checkin`,
            {
                "lastName" : values.lastName,
                "bookingReferenceNumber" : values.bookingReferenceNumber,
            },
            {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            },
            )
            // localStorage.setItem("id",(res.data.data.id))
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)


export const historySlice = createSlice({
    name: "history",
    initialState : {
        history: [],
        checkin: [],
    },
    reducers: {},
    extraReducers: {
      //tiket
      [getHistory.fulfilled]: (state, { payload }) => {
        state.history = payload;
      },
      //checkin
      [postCheckin.fulfilled]: (state, { payload }) => {
        state.checkin = payload;
      },
    },
  });

  export const historyReducer = historySlice.reducer;