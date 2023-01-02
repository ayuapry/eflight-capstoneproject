import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginEmail = createAsyncThunk("user/Login", async (values) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signin`,
      {
        email: `${values.email}`,
        password: `${values.password}`,
      }
    );
    setTimeout(function () {
      window.location.reload(1);
    }, 500);
    localStorage.removeItem("id");
    localStorage.setItem("token", res.data.data.jwtToken);
    localStorage.setItem("id", res.data.data.id);
    localStorage.setItem("role", res.data.data.role);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const Register = createAsyncThunk("user/Register", async (values) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      {
        email: `${values.email}`,
        fullName: `${values.fullname}`,
        password: `${values.password}`,
      }
    );
    localStorage.setItem("id", res.data.data.id);
    return res.data.data;
  } catch (error) {
    return error.response.data.data;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginGoogle: [],
    loginEmail: [],
    register: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [LoginEmail.pending]: (state) => {
      state.loading = true;
    },
    [LoginEmail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.login = payload;
    },
    [LoginEmail.rejected]: (state) => {
      state.loading = false;
    },
    [Register.pending]: (state) => {
      state.loading = true;
    },
    [Register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.register = payload;
    },
    [Register.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
