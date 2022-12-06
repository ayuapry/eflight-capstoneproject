import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import { ProfilePage } from "./pages/ProfilePage";
import { NotificationPage } from "./pages/NotificationPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { HistoryPage } from "./pages/HistoryPage";
import { BookingPage } from "./pages/BookingPage";
import Card from "./components/Card";
import { FilterPage } from "./pages/FilterPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Filter" element={<FilterPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/card" element={<Card />}/>
      </Routes>
  </BrowserRouter>
  </Provider>
);
