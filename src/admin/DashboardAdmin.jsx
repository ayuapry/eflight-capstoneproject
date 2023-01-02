import React from "react";
import { Sidebar } from "./Sidebar";
import dashboard from "../assets/dashboard.webp";

export const DashboardAdmin = () => {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-[15%_85%]">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <img
            className="h-[600px] w-[600px] mx-auto mt-20 object-cover"
            src={dashboard}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
