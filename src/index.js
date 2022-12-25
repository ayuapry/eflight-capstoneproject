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
import { CheckInPage } from "./pages/CheckInPage";
import { DetailsHistory } from "./pages/DetailsHistory";
import DetailPromoPage from "./pages/DetailPromoPage";
<<<<<<< HEAD
import LoopTest from "./pages/LoopTest";
=======
import DetPromoPage from "./pages/DetPromoPage";
import AllPromo from "./pages/AllPromo";
import { DetailArticle } from "./pages/DetailArticle";
import { CancelCheckinPage } from "./pages/CancelCheckinPage";
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/checkin" element={<CheckInPage />} />
        {/* </Route> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/filter/" element={<FilterPage />} />
        <Route path="/detailhistory/:id" element={<DetailsHistory />} />
        <Route path="/detail-promo/:id" element={<DetailPromoPage />} />
        <Route path="/detailpromo/:id" element={<DetPromoPage />} />
        <Route path="/allpromo" element={<AllPromo />} />
        <Route path="/card" element={<Card />} />
<<<<<<< HEAD
        <Route path="/loop" element={<LoopTest />} />
=======
        <Route path="/detail-places/:id" element={<DetailArticle />} />
        <Route path="/cancel-checkin" element={<CancelCheckinPage />} />
>>>>>>> 3e4e2105a2b918cdc1c88ee97b93568beea4b041
      </Routes>
    </BrowserRouter>
  </Provider>
);
