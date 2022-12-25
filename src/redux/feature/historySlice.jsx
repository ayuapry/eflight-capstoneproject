import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

//Hero
<<<<<<< HEAD
export const getHistory = createAsyncThunk("history/getHistory", async () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/history?userid=${id}&sort=DESC`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data.data);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});
=======
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
            // console.log(res.data)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041

export const getCheckin = createAsyncThunk(
  "user/getCheckin",
  async (values) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/checkin`,
        {
          lastName: `${values.lastName}`,
          bookingReferenceNumber: `${values.bookingReferenceNumber}`,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 500)
      );
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

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

export const getJasper = createAsyncThunk(
    'history/getJasper',
    async (bookingId) => {
        const token =  localStorage.getItem('token')
        // const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/jasperreport/eticket/${bookingId}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },  
            })
            // console.log(res.data.data);
            console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)



export const historySlice = createSlice({
<<<<<<< HEAD
  name: "history",
  initialState: {
    history: [],
    checkin: [],
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
=======
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
      [getJasper.fulfilled]: (state, { payload }) => {
        state.jasper = payload;
      },
      
      

>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
    },
  },
});

export const historyReducer = historySlice.reducer;
