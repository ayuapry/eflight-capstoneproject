import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotification = createAsyncThunk(
<<<<<<< HEAD
  "user/getNotification",
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
=======
    "user/getNotification", async () => {
        const token =  localStorage.getItem('token');
        const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/notification/${id}`,
            {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            }
            )
            // localStorage.setItem("id",(res.data.data.id))
            // console.log(res)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
        }
      );
      // localStorage.setItem("id",(res.data.data.id))
      // console.log(res)
      return res.data.data.notifications;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
<<<<<<< HEAD
  }
);

export const getCount = createAsyncThunk("user/getCount", async () => {
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
});

export const notificationSlice = createSlice({
  name: "notif",
  initialState: {
    notification: [],
    count: [],
  },
  reducers: {},
  extraReducers: {
    [getNotification.pending]: (state) => {
      state.loading = true;
    },
    [getNotification.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notification = payload;
=======
)


export const notificationSlice = createSlice({
    name: "notif",
    initialState : {
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
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
    },
    [getNotification.rejected]: (state) => {
      state.loading = false;
    },
    [getCount.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.count = payload;
    },
  },
});

export const notifReducer = notificationSlice.reducer;
