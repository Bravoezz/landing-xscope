import React from "react";
import Image from "next/image";

const ValuesTwo = () => {
  return (
    <div className="max-[800px]:w-screen max-[540px]:w-full">
      <div className="relative min-[320px]:flex-wrap min-[320px]:justify-center flex justify-center pb-20 mb-[90px] max-[540px]:gap-14 gap-5 items-center">
        <div className="text-software max-[540px]:flex items-center justify-between flex-col max-[540px]:w-[300px]">
          <small className="sm">XSCOPE</small>
          <p className="sf max-[540px]:text-2xl mb-[20px]">Software Development Company.</p>
          <p className="sf-text max-[540px]:w-[300px]">
            Efficient distribution of time and material resources for the
            project, making timely decisions, resulting in the development of a
            competitive software product from Front-end, Back-end to Mobile and
            Database. It is one of the basic principles of VironIT.
          </p>
        </div>


        <div className=" relative flex justify-center items-center stwo max-[540px]:w-[400px]">
          <div className="max-w-[240px] max-[400px]:w-[200px] max-h-[328px]">
          <Image
            className="rounded-xl  object-contain"
            src="/womeninlap.svg"
            fill={true}
            // width={240}
            // height={328}
            alt="sphot"
            />
            </div>
          <Image
            className="absolute top-9 rounded-xl left-5 "
            src="/lap.svg"
            width={160}
            height={104}
            alt="sphot"
          />
          <Image
            className="absolute max-[800px]:left-0 max-[800px]:w-[300px]  -z-30"
            src="/puntos-2.svg"
            width={435}
            height={424}
            alt="dots"
          />
        </div>
        <Image
          className="absolute max-[540px]:w-[400px] max-[540px]:right-4 right-0 -z-20"
          src="/sphot-values.svg"
          width={692}
          height={900}
          alt="sphot"
        />
        <Image
          className="absolute max-[540px]:w-[200px] max-[540px]:left-2 left-14 bottom-9  -z-20"
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
