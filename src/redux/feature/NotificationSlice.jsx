import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotification = createAsyncThunk(
  "notification/getNotification",
  async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/notification/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // localStorage.setItem("id",(res.data.data.id))
      // console.log(res)
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const notificationSlice = createSlice({
  name: "notif",
  initialState: {
    notification: [],
  },
  reducers: {},
  extraReducers: {
    [getNotification.pending]: (state) => {
      state.loading = true;
    },
    [getNotification.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notification = payload;
    },
    [getNotification.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const notifReducer = notificationSlice.reducer;
