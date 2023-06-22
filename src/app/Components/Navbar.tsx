"use client"
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [state, setState] = useState<string>("home")

    const styleNavigation = "text-center text-white"
    const active = "font-bold underline decoration-[#F9546D]"
  return (
      <div className="w-full h-[72px] px-16 bg-[#16215866] flex justify-between items-center ">
        <Image width={100} height={180} src={"/logosxscope.png"} alt="logo" />
        <div className="flex gap-10">
        <a href="#home" onClick={() => setState("home")} className={`${styleNavigation} ${state === "home" && active}`}>Home</a>
        <a href="#about" onClick={()=> setState("about")} className={`${styleNavigation} ${state === "about" && active}`}>About us</a>
        <a href="#services" onClick={()=> setState("services")} className={`${styleNavigation} ${state === "services" && active}`}>Our services</a>
        <a href="#offer" onClick={()=> setState("offer")} className={`${styleNavigation} ${state === "offer" && active}`}>What-we-offer</a>
        <a href="#portfolio" onClick={()=> setState("portfolio")} className={`${styleNavigation} ${state === "portfolio" && active} `}>Portfolio</a>
        <a href="#contact" onClick={()=> setState("contact")} className={`${styleNavigation} ${state === "contact" && active}`}>Contact us</a>
        </div>
      </div>
  );
};

export default Navbar;
