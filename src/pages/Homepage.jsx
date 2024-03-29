import React from "react";
import { Navbar } from "../components/Navbar";
import { HeadlineCards } from "../components/HeadlineCards";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";
import { SecondFooter } from "../components/SecondFooter";
import ScrollToTop from "../components/ScrollToTop";
import CardHome from "../components/CardHome";

export const Homepage = () => {
  return (
    <div className="bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <div className="h-72 md:h-[434px] md:bg-blue-600">
        <Hero />
      </div>
      <CardHome />
      <HeadlineCards />
      <Footer />
      <SecondFooter />
    </div>
  );
};
