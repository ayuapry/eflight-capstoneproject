import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { NotificationPage } from "./pages/NotificationPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
<<<<<<< HEAD
import Detail from "./pages/Detail";
=======
import { HistoryPage } from "./pages/HistoryPage";
>>>>>>> 7ce9c75308aa7a9035818532c4ae20853c9059b4

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
<<<<<<< HEAD
        <Route path="/Detail" element={<Detail/>} />
=======
        <Route path="/history" element={<HistoryPage/>} />
>>>>>>> 7ce9c75308aa7a9035818532c4ae20853c9059b4
      </Routes>
  </BrowserRouter>
);
