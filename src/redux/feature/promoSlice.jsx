import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPromo = createAsyncThunk("promo/getPromo", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/promobanner/all`
    );
    // console.log(res.data);
    return res.data.data.content;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const getDetPromo = createAsyncThunk(
  "detPromo/getDetPromo",
  async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/promobanner?id=${id}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const getPagination = createAsyncThunk(
  "pagination/getPagination",
  async (page) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/promobanner/all?page=${page}&sort=string`
      );
      return res.data.data.content;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const promoSlice = createSlice({
  name: "promo",
  initialState: {
    promo: [],
    detPromo: [],
    pagination: [],
  },
  reducers: {},
  extraReducers: {
    [getPromo.fulfilled]: (state, { payload }) => {
      state.promo = payload;
    },
    [getDetPromo.fulfilled]: (state, { payload }) => {
      state.detPromo = payload;
    },
    [getPagination.fulfilled]: (state, { payload }) => {
      state.pagination = payload;
    },
  },
});

export const promoReducer = promoSlice.reducer;
