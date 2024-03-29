import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Hero
export const getHistory = createAsyncThunk(
  "history/getHistory",
  async (values) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/history?userid=${id}&sort=${values}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCheckin = createAsyncThunk(
  "user/getCheckin",
  async (values) => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/checkin`, {
        lastName: `${values.lastName}`,
        bookingReferenceNumber: `${values.bookingReferenceNumber}`,
      });
      localStorage.setItem("checkinId", res.data.data.id);
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const getCheckinCancel = createAsyncThunk(
  "user/getCheckinCancel",
  async (values) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/checkin/cancel`,
        {
          lastName: `${values.lastName}`,
          bookingReferenceNumber: `${values.bookingReferenceNumber}`,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 500)
      );
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const getJasper = createAsyncThunk(
  "history/getJasper",
  async (bookingId) => {
    const token = localStorage.getItem("token");
    fetch(
      `https://binar-air.azurewebsites.net/api/v1/jasperreport/eticket/${bookingId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.blob())
      .then((res) => {
        const aElement = document.createElement("a");
        aElement.setAttribute("download", "E-Ticket.pdf");
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute("target", "_blank");
        aElement.click();
        URL.revokeObjectURL(href);
      });
  }
);

export const getBoardingPass = createAsyncThunk(
  "history/getBoardingPass",
  async (values) => {
    const token = localStorage.getItem('token')
    fetch(`https://binar-air.azurewebsites.net/api/v1/jasperreport/boardingpass/${values.lastName}/${values.bookingReferenceNumber}`, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.blob())
      .then(res => {
          const aElement = document.createElement('a');
          aElement.setAttribute('download', "BoardingPass.pdf");
          const href = URL.createObjectURL(res);
          aElement.href = href;
          aElement.setAttribute('target', '_blank');
          aElement.click();
          URL.revokeObjectURL(href);
      });
  }
);

export const editAvatar = createAsyncThunk(
  "user/editAvatar",
  async (values) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("userProfileImage", values.originFileObj);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload(1);
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
    checkin: [],
    cancel: [],
    jasper: [],
    boardingPass: [],
    avatar: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //history
    [getHistory.fulfilled]: (state, { payload }) => {
      state.history = payload;
    },
    //checkin
    [getCheckin.fulfilled]: (state, { payload }) => {
      state.checkin = payload;
    },
    [getCheckinCancel.fulfilled]: (state, { payload }) => {
      state.cancel = payload;
    },
    [getJasper.fulfilled]: (state, { payload }) => {
      state.jasper = payload;
    },
    [getBoardingPass.fulfilled]: (state, { payload }) => {
      state.boardingPass = payload;
    },
    [editAvatar.fulfilled]: (state, { payload }) => {
      state.avatar = payload;
    },
  },
});

export const historyReducer = historySlice.reducer;
