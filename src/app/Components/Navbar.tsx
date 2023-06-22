"use client"
import Image from "next/image";
import {Link} from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
    const [state, setState] = useState<string>("home")

    const styleNavigation = "text-center text-white cursor-pointer"
    const active = "font-bold underline decoration-[#F9546D]"
  return (
      <div className="w-full h-[72px] px-16 bg-[#16215866] flex justify-between items-center ">
        <Image width={100} height={180} src={"/logosxscope.png"} alt="logo" />
        <div className="flex gap-10">
        <Link smooth={true} offset={-430} duration={500} to="home" onClick={() => setState("home")} className={`${styleNavigation} ${state === "home" && active}`}>Home</Link>
        <Link smooth={true} offset={-430} duration={500} to="about" onClick={()=> setState("about")} className={`${styleNavigation} ${state === "about" && active}`}>About us</Link>
        <Link smooth={true} offset={-430} duration={500} to="services" onClick={()=> setState("services")} className={`${styleNavigation} ${state === "services" && active}`}>Our services</Link>
        <Link smooth={true} offset={-430} duration={500} to="offer" onClick={()=> setState("offer")} className={`${styleNavigation} ${state === "offer" && active}`}>What-we-offer</Link>
        <Link smooth={true} offset={-430} duration={500} to="portfolio" onClick={()=> setState("portfolio")} className={`${styleNavigation} ${state === "portfolio" && active} `}>Portfolio</Link>
        <Link smooth={true} offset={-430} duration={500} to="contact" onClick={()=> setState("contact")} className={`${styleNavigation} ${state === "contact" && active}`}>Contact us</Link>
        </div>
      </div>
  );
};

export default Navbar;
