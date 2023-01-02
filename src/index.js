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
import { SearchPage } from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import { CheckInPage } from "./pages/CheckInPage";
import { DetailsHistory } from "./pages/DetailsHistory";
import DetPromoPage from "./pages/DetPromoPage";
import AllPromo from "./pages/AllPromo";
import { DetailArticle } from "./pages/DetailArticle";
import { CancelCheckinPage } from "./admin/CancelCheckinPage";
import AllNotifPage from "./pages/AllNotifPage";
import { RequireAuth } from "./utils/RequireAuth";
import { Missing } from "./utils/Missing";
import { Layout } from "./utils/Layout";
import { Unauthorized } from "./utils/Unauthorized";
import { DashboardAdmin } from "./admin/DashboardAdmin";
import { Aircraft } from "./admin/Aircraft";
import { Airport } from "./admin/Airport";
import { ProfilePage } from "./pages/ProfilePage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Protect User Page*/}
        <Route element={<RequireAuth allowedRoles={["ADMIN", "BUYER"]} />}>
          <Route
            path="/notification/:userId/:id"
            element={<NotificationPage />}
          />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/checkin" element={<CheckInPage />} />
          <Route
            path="/detail-history/:bookingId"
            element={<DetailsHistory />}
          />
          <Route path="/allnotif" element={<AllNotifPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/detailpromo/:id" element={<DetPromoPage />} />
          <Route path="/allpromo" element={<AllPromo />} />
          <Route path="/card" element={<Card />} />
          <Route path="/detail-places/:id" element={<DetailArticle />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>

        {/* Protect Admin Page */}
        <Route path="/admin" element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="dashboard-admin" element={<DashboardAdmin />} />
          <Route path="cancel-checkin" element={<CancelCheckinPage />} />
          <Route path="aircraft" element={<Aircraft />} />
          <Route path="airport" element={<Airport />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
