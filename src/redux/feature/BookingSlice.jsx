import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import format from "date-fns/format";

export const getTitel = createAsyncThunk("booking/getTitel", async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/titel/all`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const postBooking = createAsyncThunk(
  "btnBooking/postBooking",
  async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/booking/userid=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res.data.data);
      console.log(res.data);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getBagage = createAsyncThunk("user/getBagage", async (id) => {
  const token = localStorage.getItem("token");
  //   const id = localStorage.getItem('id')
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/bagage/?aircraftId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //   console.log(res)
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const getSeat = createAsyncThunk("user/getSeat", async (id) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/aircraftseat?aircraftid=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const getCountry = createAsyncThunk("user/getCountry", async (id) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/country/all`
    );
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const getBenefit = createAsyncThunk("user/getBenefit", async (id) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/benefit/?aircraftid=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const Booking = createAsyncThunk("user/booking", async (values) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(values);
  // for (let i = 0; index < values.; index++) {
  //   const element = array[index];

  // }
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/booking/${id}`,
      {
        amount: values.total,
        bookingType: "One Way",
        adult: values.pass.D,
        child: values.pass.A,
        infant: values.pass.B,
        departures: {
          data: [
            {
              scheduleId: values.scheduleId,
              titelId: values.Title0,
              ageCategoryId: "ac-e0bae223-674b-4c96-916c-503f09fc7f56",
              firstName: values.FirstName0,
              lastName: values.LastName0,
              birthDate: format(new Date(`${values.birthdate0}`), "yyyy-MM-dd"),
              passportNumber: values.pasport_number0,
              issuingCountryId: values.Citizenship0,
              citizenshipId: values.Citizenship0,
              aircraftSeat: {
                id: values.seat0,
              },
              baggage: {
                total: 20,
              },
            },
          ],
        },
        returns: null,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem("id", res.data.data.id);
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error.response.data.data;
  }
});

export const BookingSlice = createSlice({
  name: "booking",
  initialState: {
    titel: [],
    btnBooking: [],
    bagage: [],
    benefit: [],
    seat: [],
    country: [],
  },
  reducers: {},
  extraReducers: {
    [getTitel.pending]: (state) => {
      state.loading = true;
    },
    [getTitel.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.titel = payload;
    },
    [getTitel.rejected]: (state) => {
      state.loading = false;
    },
    [getBagage.pending]: (state) => {
      state.loading = true;
    },
    [getBagage.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bagage = payload;
    },
    [getBagage.rejected]: (state) => {
      state.loading = false;
    },
    [getBenefit.pending]: (state) => {
      state.loading = true;
    },
    [getBenefit.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.benefit = payload;
    },
    [getBenefit.rejected]: (state) => {
      state.loading = false;
    },
    [getSeat.pending]: (state) => {
      state.loading = true;
    },
    [getSeat.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.seat = payload;
    },
    [getCountry.rejected]: (state) => {
      state.loading = false;
    },
    [getCountry.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.country = payload;
    },
    [getCountry.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const bookingReducer = BookingSlice.reducer;
