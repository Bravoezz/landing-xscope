import Image from "next/image";
import React from "react";

const WhatWeOffter = () => {
  return (
    <div className="relative max-[960px]:mt-[250px] flex-wrap gap-14 flex  items-center justify-center">
      <div className="text-software max-[540px]:flex flex-col items-center">
        <small className="sm">What-we-offer</small>
        <p className="sf max-[540px]:text-2xl max-[540px]:text-center mb-[20px]">Our Software Development Cycle</p>
        <p className="sf-text max-[540px]:w-[300px]">
          We apply a systematic approach to complex and simple projects. We
          follow Agile methodology, Scrum and Kanban, which allow our dedicated
          team to deliver exceptional apps on time.
        </p>
      </div>
      <div className="w-[240px] max-w-[240px] max-[960px]:hidden  max-[400px]:w-[200px] h-[328px]">
        <Image
          style={{all:"unset",objectFit:"contain",margin:0}}
          src="/what-we-offter.svg"
          fill={true}
          alt="sphot"
        />
      </div>
      <Image
        className="absolute max-[800px]:w-[200px] max-[800px]:left-2 -top-4 left-14 -z-30"
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
