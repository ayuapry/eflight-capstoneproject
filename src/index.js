import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { NotificationPage } from "./pages/NotificationPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
<<<<<<< HEAD
import { HistoryPage } from "./pages/HistoryPage";
=======
import Detail from "./pages/Detail";
import { HistoryPage } from "./pages/HistoryPage";
import { HistoryPage } from "./pages/HistoryPage";
>>>>>>> 5b2106d704973e7606acc43d71d156cf2e8274a0
import Detail from "./pages/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
=======
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/history" element={<HistoryPage/>} />
      </Routes>
>>>>>>> 5b2106d704973e7606acc43d71d156cf2e8274a0
  </BrowserRouter>
);
