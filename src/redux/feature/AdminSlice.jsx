import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAircraft = createAsyncThunk(
    "admin/getAircraft",
    async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          `https://binar-air.azurewebsites.net/api/v1/aircraft/all`,      
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return res.data.data;
      } catch (error) {
        console.error(error);
        return error.response.data.data;
      }
    }
  );

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
      aircraft: [],
    },
    reducers: {},
    extraReducers: {
      [getAircraft.pending]: (state) => {
        state.loading = true;
      },
      [getAircraft.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.aircraft = payload;
      },
      [getAircraft.rejected]: (state) => {
        state.loading = false;
      },
    },
  });
  
  export const adminReducer = adminSlice.reducer;
  // export default adminSlice.reducer;