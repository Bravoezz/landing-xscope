import React from "react";
import { planswift, roofing, roofr } from "../Exports/Portfolio";
import Image from "next/image";

const Portafolio = () => {
  const data = [
    {
      id: 1,
      img: roofing,
      title: "Roofing",
      subTitle: "Estimating Software",
      detail:
        "Its the only software for commercial roofing companies that provides an end-to-end automated solution for both takeoff and estimating, in a roofing software program.",
      link: "#",
      md:[170,139]
    },
    {
      id: 2,
      img: planswift,
      title: "PlanSwift",
      subTitle: "Estimating Software",
      detail:
        "Its the only software for commercial roofing companies that provides an end-to-end automated solution for both takeoff and estimating, in a roofing software program.",
      link: "#",
      md:[189,110]
    },
    {
      id: 3,
      img: roofr,
      title: "Roofr",
      subTitle: "measurement reports",
      detail:
        "We pride ourselves on accuracy. Trust our measurements to quote and win jobs. If something isnt accurate, well make it right.",
      link: "#",
      md:[135,117]
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col w-full items-center justify-center">
        <small className="sm block">Our</small>
        <p className="text-[#4661E9] font-black text-[28px] block mb-[20px]">
          Portfolio
        </p>
      </div>
      <div className="flex flex-row items-center min-[320px]:flex-wrap min-[320px]:justify-center justify-between gap-[32px]">
        {
            data?.map(item => {
                return <div className="flex w-[280px] h-[408px] flex-col rounded-[16px] items-start px-[24px] hover:scale-95 transition-all ease-in justify-center  gap-1 shadow-portafolio">
                    <div className="w-[232px] h-[168px] rounded-t-xl bg-[#E7E8FF] flex items-center justify-center">
                    <Image src={item.img} alt={item.title} width={item.md[0]} height={item.md[1]} />
                    </div>
                    <p className="text-[#4661E9] font-black text-[24px]">{item.title}</p>
                    <span className="text-black font-bold text-[16px]">{item.subTitle}</span>
                    <small className="text-[12px] w-[232px] h-[88px] flex flex-col">{item.detail}</small>
                    <a className="text-[#4661E9] mt-3 text-[12px] hover:translate-x-2 transition-all ease-in font-bold" href={item.link}>{"See project ->"}</a>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Portafolio;
