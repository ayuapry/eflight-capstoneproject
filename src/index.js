import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import { NotificationPage } from "./pages/NotificationPage";
import RegisterPage from "./pages/RegisterPage";
import { HistoryPage } from "./pages/HistoryPage";
import { BookingPage } from "./pages/BookingPage";
import Card from "./components/Card";
import { FilterPage } from "./pages/FilterPage";
import LoginPage from "./pages/LoginPage";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Coba } from "./pages/Coba";
import { CheckInPage } from "./pages/CheckInPage";
import { DetailsHistory } from "./pages/DetailsHistory";
import DetailPromoPage from "./pages/DetailPromoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/Booking/:id" element={<BookingPage />} />
        <Route path="/checkin" element={<CheckInPage />} />
        {/* </Route> */}
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Filter/" element={<FilterPage />} />
        <Route path="/detailhistory/:id" element={<DetailsHistory />} />
        <Route path="/detail-promo/:id" element={<DetailPromoPage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
