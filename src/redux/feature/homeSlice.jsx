import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

//Hero
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
  }
});

//Country
export const getCountry = createAsyncThunk("country/getCountry", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/airport/all`
    );
    // console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

//AgeCategory
export const getAge = createAsyncThunk("age/getAge", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/agecategory/all`
    );
    // console.log(res)
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

//CabinClass
export const getCabinClass = createAsyncThunk(
  "cabinClass/getCabinClass",
  async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/travel/all`
      );
      // console.log(res)
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

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
    // console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

//QR
export const getQR = createAsyncThunk("qr/getQR", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/qr`
    );
    // console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
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
    qr: [],
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
    [getCountry.pending]: (state) => {
      state.loading = true;
    },
    [getCountry.fulfilled]: (state, { payload }) => {
      state.country = payload;
    },
    [getCountry.rejected]: (state) => {
      state.loading = false;
    },
    //AgeCategory
    [getAge.pending]: (state) => {
      state.loading = true;
    },
    [getAge.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.age = payload;
    },
    [getAge.rejected]: (state) => {
      state.loading = false;
    },
    //CabinClass
    [getCabinClass.pending]: (state) => {
      state.loading = true;
    },
    [getCabinClass.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cabinClass = payload;
    },
    [getCabinClass.rejected]: (state) => {
      state.loading = false;
    },
    //tiket
    [getTiket.pending]: (state) => {
      state.loading = true;
    },
    [getTiket.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tiket = payload;
    },
    [getTiket.rejected]: (state) => {
      state.loading = false;
    },
    //QR
    [getQR.pending]: (state) => {
      state.loading = true;
    },
    [getQR.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.qr = payload;
    },
    [getQR.rejected]: (state) => {
      state.loading = false;
    },
    
  },
});

export const homeReducer = homeSlice.reducer;
// export default homeSlice.reducer;
