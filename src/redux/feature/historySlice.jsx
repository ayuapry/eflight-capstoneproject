import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

//Hero
export const getHistory = createAsyncThunk(
    'history/getHistory',
    async () => {
        const token =  localStorage.getItem('token')
        const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/history?userid=ur-5e2c2e57-e1b4-4094-84d5-119340372e79&sort=DESC`, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },  
            })
            console.log(res.data.data);
            // console.log(res.data)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const getCheckin = createAsyncThunk(
    "user/getCheckin", async (values) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/checkin`,
            {
                "lastName" : `${values.lastName}`,
                "bookingReferenceNumber" : `${values.bookingReferenceNumber}`,
            },
            setTimeout(function () {
                window.location.reload(1);
            }, 500)
            )
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

export const getCheckinCancel = createAsyncThunk(
    "user/getCheckinCancel", async (values) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/checkin/cancel`,
            {
                "lastName" : `${values.lastName}`,
                "bookingReferenceNumber" : `${values.bookingReferenceNumber}`,
            },
            setTimeout(function () {
                window.location.reload(1);
            }, 500)
            )
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

// export const getJasper = createAsyncThunk(
//     'history/getJasper',
//     async (bookingId) => {
//         const token =  localStorage.getItem('token')
//         // const id = localStorage.getItem('id')
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/jasperreport/eticket/${bookingId}`, {
//                 headers: { 
//                     'Authorization': `Bearer ${token}`
//                 },  
//             })
//             // console.log(res.data.data);
//             console.log(res)
//             return res.data.data
//         } catch (err) {
//             console.log(err)
//         }
//     }
// )



export const historySlice = createSlice({
    name: "history",
    initialState : {
        history: [],
        checkin: [],
        cancel: [],
        jasper: [],
    },
    reducers: {},
    extraReducers: {
      //history
      [getHistory.fulfilled]: (state, { payload }) => {
        state.history = payload;
      },
      //checkin
      [getCheckin.fulfilled]: (state, { payload }) => {
        state.checkin = payload;
      },
      [getCheckinCancel.fulfilled]: (state, { payload }) => {
        state.cancel = payload;
      },
    //   [getJasper.fulfilled]: (state, { payload }) => {
    //     state.jasper = payload;
    //   },
      
      

    },
  });

  export const historyReducer = historySlice.reducer;