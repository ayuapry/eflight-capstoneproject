import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';

export const getProfile = createAsyncThunk(
    "user/getProfile", async () => {
        const token =  localStorage.getItem('token');
        const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`,
            {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            }
            )
            // localStorage.setItem("id",(res.data.data.id))
            // console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041

export const getProfile = createAsyncThunk("user/getProfile", async () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // localStorage.setItem("id",(res.data.data.id))
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (values) => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/update/${id}`,
        {
          fullName: values.fullName,
          birthDate: values.birthDate,
          gender: values.gender,
          cityId: values.cityId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // localStorage.setItem("id",(res.data.data.id))
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

<<<<<<< HEAD
export const getCity = createAsyncThunk("user/getCity", async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/city/all`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});
=======
export const getCity = createAsyncThunk(
    'user/getCity',
    async () => {
        try {
            const res = await axios.get("https://binar-air-rest-api-production.up.railway.app/api/v1/city/all ")
            // console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041



export const UserSlice = createSlice({
  name: "auth",
  initialState: {
    profile: [],
    editProfile: [],
    city: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.loading = true;
    },
<<<<<<< HEAD
    [getProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.profile = payload;
    },
    [getProfile.rejected]: (state) => {
      state.loading = false;
    },
    [editProfile.pending]: (state) => {
      state.loading = true;
    },
    [editProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.editProfile = payload;
    },
    [editProfile.rejected]: (state) => {
      state.loading = false;
    },
    [getCity.pending]: (state) => {
      state.loading = true;
    },
    [getCity.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.city = payload;
    },
    [getCity.rejected]: (state) => {
      state.loading = false;
    },
  },
});
=======
    reducers: {},
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.loading = true
        },
        [getProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.profile = payload
        },
        [getProfile.rejected]: (state) => {
            state.loading = false
        },
        [editProfile.pending]: (state) => {
            state.loading = true
        },
        [editProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.editProfile = payload
        },
        [editProfile.rejected]: (state) => {
            state.loading = false
        },
        [getCity.pending]: (state) => {
            state.loading = true
        },
        [getCity.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.city = payload
        },
        [getCity.rejected]: (state) => {
            state.loading = false
        },
    }
})
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041

export const userReducer = UserSlice.reducer;
