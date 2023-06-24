"use client";
import Image from "next/image";
import React from "react";
import { lvlUno,lvlDos, lvlTres } from "../Exports/carousel1";

const Carousel = () => {
  return (
    <div className="relative">
      <div className="slider pb-10">
      <div className="slider-track mb-4">
        {lvlUno?.map((im,index) => (
            <div key={index} className="slide">
              <Image
                className="rounded-xl h-full"
                src={im}
                height={100}
                alt="tech"
              />
            </div>
        ))}
        </div>
      <div className="slider-track1 mb-4">
        {lvlDos?.map((im,index) => (
            <div key={index} className="slide">
              <Image
                className="rounded-xl "
                src={im}
                height={70}
                alt="tech"
              />
            </div>
        ))}
        </div>
      <div className="slider-track2 mb-4">
        {lvlTres?.map((im,index) => (
            <div key={index} className="slide">
              <Image
                className="rounded-xl "
                src={im}
                height={70}
                alt="tech"
              />
            </div>
        ))}
        </div>
      </div>
      <div className="h-[100px]"></div>
      <Image
          className="absolute bottom-0  -z-20"
          src="/sphot-tech.svg"
          width={214}
          height={366}
          alt="xscope"
        />
    </div>
  );
};

export default Carousel;
