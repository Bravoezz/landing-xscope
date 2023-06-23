import Image from "next/image";
import React from "react";

const WhatWeOffter = () => {
  return (
    <div className="relative gap-14 flex items-center justify-center">
      <div className="text-software">
        <small className="sm">What-we-offer</small>
        <p className="sf mb-[20px]">Our Software Development Cycle</p>
        <p className="sf-text">
          We apply a systematic approach to complex and simple projects. We
          follow Agile methodology, Scrum and Kanban, which allow our dedicated
          team to deliver exceptional apps on time.
        </p>
      </div>
      <div>
        <Image
          className="w-[380px] h-[368px]"
          src="/what-we-offter.svg"
          width={240}
          height={328}
          alt="sphot"
          
        />
      </div>
      <Image
        className="absolute -top-4 left-14 -z-30"
        src="/what-we-fiff.svg"
        width={360}
        height={160}
        alt="offter"
      />
      <Image
        className="absolute -bottom-80 right-0 -z-30"
        src="/sphot-offter.svg"
        width={350}
        height={365}
        alt="offter"
      />
      <Image
        className="absolute -bottom-80 right-0 -z-30"
        src="/sphot-offter.svg"
        width={350}
        height={365}
        alt="offter"
      />
      <Image
        className="absolute w-full -bottom-40 left-0 -z-30"
        src="/lines-offter.svg"
        width={100}
        height={100}
        alt="lines-offter"
      />
    </div>
  );
};

export default WhatWeOffter;
