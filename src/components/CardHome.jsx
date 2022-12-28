import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";

const CardHome = () => {
  return (
    <div
      id="Booking"
      className="bg-slate-50 md:bg-transparent h-auto pb-5 md:py-0 flex justify-center"
    >
      <div className="h-[10%] md:bg-blue-600 w-full absolute"></div>
      <Card />
    </div>
  );
};

export default CardHome;
