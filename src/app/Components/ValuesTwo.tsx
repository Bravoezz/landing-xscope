import React from "react";
import Image from "next/image";

const ValuesTwo = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="text-software">
        <small className="sm">XSCOPE</small>
        <p className="sf">
        Software Development Company.
        </p>
        <p className="sf-text">
          Efficient distribution of time and material resources for the project,
          making timely decisions, resulting in the development of a competitive
          software product from Front-end, Back-end to Mobile and Database. It
          is one of the basic principles of VironIT.
        </p>
      </div>

      <div className=" relative image-software stwo">
      <Image
        className="absolute right-0 -z-10"
        src="/womeninlap.svg"
        width={240}
        height={328}
        alt="sphot"
      />
      </div>
      <Image
        className="absolute right-0 -z-20"
        src="/sphot-values.svg"
        width={692}
        height={900}
        alt="sphot"
      />
    </div>
  );
};

export default ValuesTwo;
