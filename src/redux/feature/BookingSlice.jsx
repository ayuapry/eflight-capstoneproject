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

export const BookingSlice = createSlice({
    name: "booking",
    initialState : {
      titel: [],
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
    },
  });

  export const bookingReducer = BookingSlice.reducer;
