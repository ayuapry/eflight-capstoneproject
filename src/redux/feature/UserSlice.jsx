import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

export const editProfile = createAsyncThunk(
    "user/editProfile", async (values) => {
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        try {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/user/update/${id}`,
            {
                "fullName" : values.fullName,
                "birthDate" : values.birthDate,
                "gender" : values.gender,
                "cityId" : values.cityId 
            },
            {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            }
            )
            // localStorage.setItem("id",(res.data.data.id))
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

export const UserSlice = createSlice({
    name: "auth",
    initialState: {
        profile: [],
        loading: false,
    },
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

    }
})

export const userReducer = UserSlice.reducer