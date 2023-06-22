"use client";
import Image from "next/image";
import React from "react";
import UnicValues from "./UnicValues";

const Values = () => {
  return (
    <div className="relative h-screen bg-red-900 flex items-end justify-center">
      <UnicValues />

      <Image
        className="absolute w-full top-0 left-0"
        src="/lines.svg"
        width={100}
        height={100}
        alt="lines"
      />
    </div>
  );
};

export default Values;
