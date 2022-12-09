import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import { ProfilePage } from "./pages/ProfilePage";
import { NotificationPage } from "./pages/NotificationPage";
import RegisterPage from "./pages/RegisterPage";
import { HistoryPage } from "./pages/HistoryPage";
import { BookingPage } from "./pages/BookingPage";
import Card from "./components/Card";
import { FilterPage } from "./pages/FilterPage";
import { History } from "./pages/History";
import LoginPage from "./pages/LoginPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Filter" element={<FilterPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/card" element={<Card />}/>
        <Route path="/story" element={<History/>} />
      </Routes>
  </BrowserRouter>
  </Provider>
);
