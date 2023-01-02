import React from "react";
import Filter from "../components/Filter";
import Detail from "../components/Detail";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { SecondFooter } from "../components/SecondFooter";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation } from "react-router-dom";
import DetailRoundtrip from "../components/DetailRoundtrip";

export const SearchPage = () => {
  const location = useLocation();
  const values = location.state?.values;
  return (
    <div className="bg-slate-50 h-full">
      <ScrollToTop />
      <Navbar className="mb-4" />
      <div className="h-auto min-h-screen w-full lg:px-16 p-4 pt-24 lg:flex lg:pt-24 justify-center">
        {/* <Filter /> */}
        {values.dt2 === "NA" ? <Detail /> : <DetailRoundtrip />}
      </div>
      <div className="relative z-10">
        <Footer />
        <SecondFooter />
      </div>
    </div>
  );
};
