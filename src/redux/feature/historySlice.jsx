import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Hero
export const getHistory = createAsyncThunk(
    'history/getHistory',
    async () => {
        try {
            const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/history
            `)
            // console.log(res.data.data);
            console.log(res.data)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const historySlice = createSlice({
    name: "history",
    initialState : {
        history: [],
    },
    reducers: {},
    extraReducers: {
      //tiket
      [getHistory.fulfilled]: (state, { payload }) => {
        state.history = payload;
      },
    },
  });

  export const historyReducer = historySlice.reducer;