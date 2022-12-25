import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

//Hero
<<<<<<< HEAD
export const getHero = createAsyncThunk("promo/getHero", async () => {
  try {
    const res =
      await axios.get(`${process.env.REACT_APP_BASE_URL}/herobanner/all
            `);
    // console.log(res.data.data);
    // console.log(res.data)
    return res.data.data;
  } catch (err) {
    console.log(err);
=======
export const getHero = createAsyncThunk(
  'promo/getHero',
  async () => {
    try {
      const res = await axios.get(`https://binar-air.azurewebsites.net/api/v1/herobanner/all
            `)
      // console.log(res.data.data);
      // console.log(res.data)
      return res.data.data
    } catch (err) {
      console.log(err)
    }
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
  }
});

//Country
<<<<<<< HEAD
export const getCountry = createAsyncThunk("country/getCountry", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/airport/all`
    );
    // console.log(res)
    return res.data.data;
  } catch (err) {
    console.log(err);
=======
export const getCountry = createAsyncThunk(
  'country/getCountry',
  async () => {
    try {
      const res = await axios.get("https://binar-air.azurewebsites.net/api/v1/airport/all")
      // console.log(res)
      return res.data.data
    } catch (err) {
      console.log(err)
    }
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
  }
});

//AgeCategory
<<<<<<< HEAD
export const getAge = createAsyncThunk("age/getAge", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/agecategory/all`
    );
    // console.log(res)
    return res.data.data;
  } catch (err) {
    console.log(err);
=======
export const getAge = createAsyncThunk(
  'age/getAge',
  async () => {
    try {
      const res = await axios.get("https://binar-air.azurewebsites.net/api/v1/agecategory/all")
      // console.log(res)
      return res.data.data
    } catch (err) {
      console.log(err)
    }
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
  }
});

//CabinClass
export const getCabinClass = createAsyncThunk(
  "cabinClass/getCabinClass",
  async () => {
    try {
<<<<<<< HEAD
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/travel/all`
      );
=======
      const res = await axios.get("https://binar-air.azurewebsites.net/api/v1/travel/all")
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
      // console.log(res)
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

<<<<<<< HEAD
export const getTiket = createAsyncThunk("tiket/getTiket", async (values) => {
  console.log(values, "value");
  const payload = {
    ap: `${values.ap1}.${values.ap2}`,
    dt: `${values.dt1}.${values.dt2}`,
    ps: `${values.psD}.${values.psA}.${values.psB}`,
    sc: `${values.sc}`,
    // ap : 'DPS.CGK',
    // dt : '25-12-2022.NA',
    // ps : '1.1.0',
    // sc : 'ECONOMY'
  };
  try {
    const res = await axios.get(
      values.dt2 === "NA"
        ? `${process.env.REACT_APP_BASE_URL}/flight/fullsearch?${qs.stringify(
            payload
          )}`
        : `${
            process.env.REACT_APP_BASE_URL
          }/flight/fulltwosearch?${qs.stringify(payload)}`
    );
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
=======

export const getTiket = createAsyncThunk(
  'tiket/getTiket',
  async (values) => {
    console.log(values, 'value')
    const payload = {
      ap: `${values.ap1}.${values.ap2}`,
      dt: `${values.dt1}.${values.dt2}`,
      ps: `${values.psD}.${values.psA}.${values.psB}`,
      sc: `${values.sc}`
      // ap : 'DPS.CGK',
      // dt : '25-12-2022.NA',
      // ps : '1.1.0',
      // sc : 'ECONOMY'
    }
    try {
      const res = await axios.get(values.dt2 === 'NA' ? `https://binar-air.azurewebsites.net/api/v1/flight/fullsearch?${qs.stringify(payload)}` : `https://binar-air-rest-api-production.up.railway.app/api/v1/flight/fulltwosearch?${qs.stringify(payload)}`)
  console.log(res.data.data)
      return res.data.data
    } catch (err) {
      console.log(err)
    }
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
  }
});

export const homeSlice = createSlice({
  name: "homepage",
  initialState: {
    hero: [],
    country: [],
    age: [],
    cabinClass: [],
    tiket: [],
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
    //tiket
    [getTiket.fulfilled]: (state, { payload }) => {
      state.tiket = payload;
    },
  },
});

export const homeReducer = homeSlice.reducer;
// export default homeSlice.reducer;
