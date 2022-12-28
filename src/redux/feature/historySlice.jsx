import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Hero
export const getHistory = createAsyncThunk("history/getHistory", async () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/history?userid=${id}&sort=DESC`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const getCheckin = createAsyncThunk(
  "user/getCheckin",
  async (values) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/checkin`,
        {
          lastName: `${values.lastName}`,
          bookingReferenceNumber: `${values.bookingReferenceNumber}`,
        },
        setTimeout(function () {
          window.location.reload(1);
        }, 500)
      );
      console.log(res.data.data);
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
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      console.error(error);
      return error.response.data.data;
    }
  }
);

export const getJasper = createAsyncThunk(
    'history/getJasper',
    async (bookingId) => {
        const token =  localStorage.getItem('token')
        // const id = localStorage.getItem('id')
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/jasperreport/eticket/${bookingId}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`
                },  
            })
            .then((data) => {
              data.blob().then(blob => download(blob, "jasper.pdf"))
              console.log(data)
            })
            function download(blob, jasper){
              const url = window.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;

              a.download = jasper;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);

            }
            // console.log(res.data.data);
            console.log(res)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
)



export const historySlice = createSlice({
    name: "history",
    initialState : {
        history: [],
        checkin: [],
        cancel: [],
        jasper: [],
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
      
      

    },
  });


export const historyReducer = historySlice.reducer;
