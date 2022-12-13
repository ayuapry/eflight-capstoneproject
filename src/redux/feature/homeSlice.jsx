import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//Hero
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

//Country
export const getCountry = createAsyncThunk(
    'country/getCountry',
    async () => {
        try {
            const res = await axios.get("https://binar-air-rest-api-production.up.railway.app/api/v1/airport/all")
            console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

//AgeCategory
export const getAge = createAsyncThunk(
    'age/getAge',
    async () => {
        try {
            const res = await axios.get("https://binar-air-rest-api-production.up.railway.app/api/v1/agecategory/all")
            console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

//CabinClass
export const getCabinClass = createAsyncThunk(
    'cabinClass/getCabinClass',
    async () => {
        try {
            const res = await axios.get("https://binar-air-rest-api-production.up.railway.app/api/v1/travel/all")
            console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const getTiket = createAsyncThunk(
  'tiket/getTiket',
  async () => {
      try {
          const res = await axios.get("https://binar-air-rest-api-production.up.railway.app/api/v1/flight/fullsearch",
          {
            params: {
              ap: 'DPS.CGK',
              dt : '25-12-2022.NA',
              ps : '1.1.0',
              sc : 'ECONOMY'
            }
          }
          )
          console.log(res.data.data)
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
      country: [],
      age: [],
      cabinClass: [],
      tiket: []
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
      //Country
      [getCountry.fulfilled]: (state, { payload }) => {
        state.country = payload;
      },
      //AgeCategory
      [getAge.fulfilled]: (state, { payload }) => {
        state.age = payload;
      },
      //CabinClass
      [getCabinClass.fulfilled]: (state, { payload }) => {
        state.cabinClass = payload;
      },
      [getTiket.fulfilled]: (state, { payload }) => {
        state.tiket = payload;
      },
    },
  });

  export const homeReducer = homeSlice.reducer;
  // export default homeSlice.reducer;
