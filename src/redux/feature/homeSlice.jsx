import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getHero = createAsyncThunk(
    'promo/getHero',
    async () => {
        try {
            const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/herobanner/all
            `)
            // console.log(res.data.data);
            // console.log(res.data)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const homeSlice = createSlice({
    name: "homepage",
    initialState : {
      hero: [],
    },
    reducers: {},
    extraReducers: {
      [getHero.pending]: (state) => {
        state.loading = true;
      },
      [getHero.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.hero = payload;
      },
      [getHero.rejected]: (state) => {
        state.loading = false;
      },
    },
  });

  export const homeReducer = homeSlice.reducer;
