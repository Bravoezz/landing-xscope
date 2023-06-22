import React from "react";
import Image from "next/image";

const ValuesTwo = () => {
  return (
    <div>
      <div className="relative flex justify-center pb-20 mb-[90px] gap-5 items-center">
        <div className="text-software">
          <small className="sm">XSCOPE</small>
          <p className="sf mb-[20px]">Software Development Company.</p>
          <p className="sf-text">
            Efficient distribution of time and material resources for the
            project, making timely decisions, resulting in the development of a
            competitive software product from Front-end, Back-end to Mobile and
            Database. It is one of the basic principles of VironIT.
          </p>
        </div>

        <div className=" relative flex justify-center items-center stwo">
          <Image
            className="rounded-xl"
            src="/womeninlap.svg"
            width={240}
            height={328}
            alt="sphot"
          />
          <Image
            className="absolute top-9 rounded-xl left-5 z-20"
            src="/lap.svg"
            width={160}
            height={104}
            alt="sphot"
          />
          <Image
            className="absolute  -z-30"
            src="/puntos-2.svg"
            width={435}
            height={424}
            alt="dots"
          />
        </div>
        <Image
          className="absolute right-0 -z-20"
          src="/sphot-values.svg"
          width={692}
          height={900}
          alt="sphot"
        />
        <Image
          className="absolute left-14 bottom-9  -z-20"
          src="/XSCOPE.svg"
          width={632}
          height={112}
          alt="xscope"
        />
      </div>
    </div>
  );
};

export default ValuesTwo;
