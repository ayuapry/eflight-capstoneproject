import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// export const LoginGoogle = createAsyncThunk(
//     "user/LoginGoogle", async () => {
//         try {
//             const res = await signInWithPopup(auth, googleProvider);
//             const user = res.user;
//             const q = query(collection(db, "users"), where("uid", "==", user.uid));
//             const docs = await getDocs(q);
//             if (docs.docs.length === 0) {
//                 await addDoc(collection(db, "users"), {
//                     uid: user.uid,
//                     name: user.displayName,
//                     authProvider: "google",
//                     email: user.email,
//                 });
//             }
//             localStorage.setItem("token", JSON.stringify(user.accessToken))
//             localStorage.setItem("user", JSON.stringify(user))
//             window.location.reload(1);
//             return user
//         } catch (err) {
//             console.error(err);
//             alert(err.message);
//         }
//     }
// )

export const LoginEmail = createAsyncThunk(
    "user/Login", async (values) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, {
                "email": `${values.email}`,
                "password": `${values.password}`
            })
            localStorage.setItem("token",(res.data.data.jwtToken))
            return res.data.data
        } catch (error) {
            // console.error(error.response.data.data)
            return error.response.data.data
        }
    }
)

export const Register = createAsyncThunk(
    "user/Register", async (values) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/signup`,
            {
                "email" : `${values.email}`,
                "fullName" : `${values.fullname}`,
                "password" : `${values.password}`
            }
            )
            localStorage.setItem("id",(res.data.data.id))
            return res.data.data
        } catch (error) {
            // console.error(error.response.data.data)
            return error.response.data.data
        }
    }
)

export const Profile = createAsyncThunk(
    "user/Profile", async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/`,
            {
                params: {
                    id: 'ur-5e2c2e57-e1b4-4094-84d5-119340372e79'
                }
            }, {headers:{ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY3MDg1NjY1OCwiZXhwIjoxNzAyMzM5MjAwfQ.uRPifNGgjmYNlfA23kWSsEpjZtmLRJQhmnQyxQLFAgSWevBCE2jDNUcYmjjU9jPh-WrbR_kYLD3y4tEWgKv2Yw'
        }})
            // localStorage.setItem("id",(res.data.data.id))
            console.log(res);
            return res.data.data
        } catch (error) {
            // console.error(error.response.data.data)
            return error.response.data.data
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginGoogle: [],
        loginEmail: [],
        register: [],
        profile: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [LoginEmail.pending]: (state) => {
            state.loading = true
        },
        [LoginEmail.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.login = payload
        },
        [LoginEmail.rejected]: (state) => {
            state.loading = false
        },
        [Register.pending]: (state) => {
            state.loading = true
        },
        [Register.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.register = payload
        },
        [Register.rejected]: (state) => {
            state.loading = false
        },
        [Profile.pending]: (state) => {
            state.loading = true
        },
        [Profile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.profile = payload
        },
        [Profile.rejected]: (state) => {
            state.loading = false
        },

    }
})

export const authReducer = authSlice.reducer