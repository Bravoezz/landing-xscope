"use client"
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    const stl: string = "text-white cursor-pointer font-bold text-[16px]";
  return (
    <>
      <div className="w-full h-[328px] flex items-center justify-center gap-40 bg-[#4661E9]">
        <div className="flex flex-row items-center gap-28 justify-center">
          <div className="flex flex-col gap-10 items-start justify-center">
            <Image
              width={100}
              height={32}
              src={"/XSCOPEFOTTER.svg"}
              alt="logo"
            />
            <p className="text-white w-[228px] text-[12px]">
              Estimating Edges team of experienced construction professionals
              and software engineers have developed the industrys smartest
              takeoff and estimating software solutions for competitive
              estimates.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 justify-center">
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="home">Home</Link>
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="about">About us</Link>
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="contact">Contact us</Link>
          </div>
          <div className="flex flex-col items-start gap-3 justify-center">
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="services">Our services</Link>
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="offer">What-we-offer</Link>
            <Link className={`${stl}`} smooth={true} offset={-430} duration={500} to="portfolio">Portfolio</Link>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
        <Image
            width={24}
            height={24}
            src={"/ig.svg"}
            alt="logo"
        />
        <Image
        width={24}
        height={24}
        src={"/tw.svg"}
        alt="logo"
        />
        <Image
        width={24}
        height={24}
        src={"/fb.svg"}
        alt="logo"
            />
        </div>
      </div>
      <div className="h-[56px]  flex justify-center text-white text-[14px] items-center bg-[#F9546D]">
        © Xscope - 2024
      </div>
    </>
  );
};

export default Footer;
