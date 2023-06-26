"use client"
import Image from "next/image";
import {Link} from "react-scroll";
import React, { useState } from "react";
import * as Icons from "react-feather"
import {motion,AnimatePresence} from "framer-motion"

const Navbar = () => {
    const [state, setState] = useState<string>("home")
    const [menu, setMenu] = useState<boolean>(false)  

    const styleNavigation = "text-center text-white cursor-pointer"
    const styleNavigationSm = "text-center text-black cursor-pointer"
    const active = "font-bold underline decoration-[#F9546D]"
  return (
      <div className="w-screen z-50 md:flex flex  justify-between md:items-center bg-white md:justify-between min-[940px]:backdrop-blur-sm fixed flex-nowrap  top-0 left-0 min-[940px]:h-[72px] h-[50px] px-16 py-3 min-[940px]:bg-[#16215866]">
       <div className="text-black z-50">
        <Image className=" min-[940px]:flex hidden z-50 " width={100} height={180} src={"/logosxscope.png"} alt="logo" />
        <div className="min-[940px]:hidden flex items-center bg-white gap-1 justify-center">
          <p className="font-black text-2xl text-gray-600">XSCOPE</p>
          <Image className="z-50" width={27} height={180} src={"/Logosx.png"} alt="logo" />
        </div>
       </div>
       <div className="min-[940px]:hidden text-white">
          {
            !menu ? <Icons.Menu  className="font-bold text-black" size={30} onClick={() => setMenu(true)}/>
            :<Icons.X className="font-bold text-black" size={30} onClick={() => setMenu(false)}/>
          }
       </div>
       <AnimatePresence>
      {
         menu && 
       <motion.div 
       initial={{ opacity: 0, y: -20  }}
        animate={{ opacity: 1, y: -5 }}
        exit={{ opacity: 0,y: -10}}
       className="gap-5 w-screen flex flex-col min-[940px]:hidden fixed top-[50px] bg-white  items-start px-16 py-3 left-0  z-50 bg-[#16215866]">
        <Link smooth={true} offset={-430} duration={500} to="home" onClick={() => setState("home")} className={`${styleNavigationSm}  ${state === "home" && active}`}>Home</Link>
        <Link smooth={true} offset={-430} duration={500} to="about" onClick={()=> setState("about")} className={`${styleNavigationSm}  ${state === "about" && active}`}>About us</Link>
        <Link smooth={true} offset={-430} duration={500} to="services" onClick={()=> setState("services")} className={`${styleNavigationSm}  ${state === "services" && active}`}>Our services</Link>
        <Link smooth={true} offset={-430} duration={500} to="offer" onClick={()=> setState("offer")} className={`${styleNavigationSm}  ${state === "offer" && active}`}>What-we-offer</Link>
        <Link smooth={true} offset={-430} duration={500} to="portfolio" onClick={()=> setState("portfolio")} className={`${styleNavigationSm} ${state === "portfolio" && active} `}>Portfolio</Link>
        <Link smooth={true} offset={-430} duration={500} to="contact" onClick={()=> setState("contact")} className={`${styleNavigationSm}  ${state === "contact" && active}`}>Contact us</Link>
        </motion.div>
       }
       </AnimatePresence>
        <div className="min-[940px]:flex min-[940px]:flex-row min-[940px]:gap-10 hidden ">
        <Link smooth={true} offset={-430} duration={500} to="home" onClick={() => setState("home")} className={`${styleNavigation}  ${state === "home" && active}`}>Home</Link>
        <Link smooth={true} offset={-430} duration={500} to="about" onClick={()=> setState("about")} className={`${styleNavigation}  ${state === "about" && active}`}>About us</Link>
        <Link smooth={true} offset={-430} duration={500} to="services" onClick={()=> setState("services")} className={`${styleNavigation}  ${state === "services" && active}`}>Our services</Link>
        <Link smooth={true} offset={-430} duration={500} to="offer" onClick={()=> setState("offer")} className={`${styleNavigation}  ${state === "offer" && active}`}>What-we-offer</Link>
        <Link smooth={true} offset={-430} duration={500} to="portfolio" onClick={()=> setState("portfolio")} className={`${styleNavigation} ${state === "portfolio" && active} `}>Portfolio</Link>
        <Link smooth={true} offset={-430} duration={500} to="contact" onClick={()=> setState("contact")} className={`${styleNavigation}  ${state === "contact" && active}`}>Contact us</Link>
        </div>
      </div>
  );
};

export default Navbar;
