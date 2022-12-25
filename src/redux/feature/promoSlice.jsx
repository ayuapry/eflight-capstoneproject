import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { useParams } from "react-router-dom";

export const getPromo = createAsyncThunk(
    'promo/getPromo',
    async () => {
        // const token =  localStorage.getItem('token')
        try {
            const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/promobanner/all`, {
            // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/promobanner/all`, {
                // "page" :"1",
                // "size" :"1",
                // "sort": [
                //     "string"
                //   ],
                // headers: {
                //     'Authorization': `Bearer ${token}`
                // },
            })
            console.log(res.data)
            return res.data.data.content
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

export const getDetPromo = createAsyncThunk(
    'detPromo/getDetPromo',
    async (id) => {
        console.log("testtt");
        try {
            const res = await axios.get(`https://binar-air.azurewebsites.net/api/v1/promobanner?id=${id}` 
            )
            console.log(res.data)
            return res.data
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

export const getPagination = createAsyncThunk(
    'pagination/getPagination',
    // async (size) => {
    async (page) => {
        try {
            // const res = await axios.get(`https://binar-air-rest-api-production.up.railway.app/api/v1/promobanner/all?page=1&size=${size}&sort=string` 
            const res = await axios.get(`https://binar-air.azurewebsites.net/api/v1/promobanner/all?page=${page}&sort=string` 
            )
            console.log(res.data)
            return res.data.data.content
        } catch (error) {
            console.error(error)
            return error.response.data.data
        }
    }
)

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

    }
})

export const promoReducer = promoSlice.reducer