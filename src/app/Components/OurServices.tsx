"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const OurServices = () => {
  const [toggle, setToggle] = useState<number>(1);

  const data = [
    {
      id: 1,
      title: "Desarrollo de software personalizado",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
    {
      id: 2,
      title: "Mobile App Development Services",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
    {
      id: 3,
      title: "Offshore Software Development",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
    {
      id: 4,
      title: "Enterprise Software Development",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
    {
      id: 5,
      title: "IT Consulting",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
    {
      id: 6,
      title: "Software Integration",
      detail:
        "We convert your idea into solid, safe, and reliable custom software with our full-cycle software development services, including:",
      list: [" Web app solution", " Mobile app solutions", "UI/UX"],
    },
  ];
  return (
    <div className="relative w-full py-10 h-[522px] flex items-start gap-10 justify-center">
      <div className="acordion  ">
        {data?.map((item,index) => {
          return (
            <div key={index} className="flex mb-[8px] flex-col items-center justify-between gap-2">
              <div
                key={item.id}
                className="w-[450px] bg-[#E7E8FF] rounded-[16px] px-[24px] h-[48px] flex items-center justify-between"
              >
                <p className="font-bold text-[14px] text-[#4661E9]">
                  {item.title}
                </p>
                <Image
                  onClick={() => setToggle(toggle === item.id ? 0 : item.id)}
                  width={24}
                  height={24}
                  src={`${
                    toggle === item.id
                      ? "/icon-acordion-negative"
                      : "/icon-acordion-positive"
                  }.svg`}
                  alt="icon"
                />
              </div>
              <AnimatePresence>
                {toggle === item.id && (
                  <motion.div
                  initial={{ opacity: 0, y: -20  }}
                  animate={{ opacity: 1, y: 0 }}
                //   exit={{ opacity: 0}}
                   className="w-[402px]">
                    <p className="text-[12px] mb-2">{item.detail}</p>
                    <ul>
                      {item?.list?.map((item,index:number) => {
                        return (
                          <li key={index} className="text-[12px] ">
                            <strong>.</strong> {item}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <div className="text-software">
        <small className="sm">Our Services</small>
        <p className="sff mb-[20px]">
          We Provide Agile Software Development Services
        </p>
        <p className="sf-text">
          Based on many years of experience, we know that every business has a
          different software and hardware environment. That is why we provide a
          wide range of software development services. Check out the key
          services below.
        </p>
      </div>
      <Image
        className="absolute top-60 right-20 -z-30"
        width={486}
        height={100}
        src={"/Ourservices.svg"}
        alt="diff"
      />
      <Image
        className="absolute -top-10 left-56 -z-30"
        width={435}
        height={100}
        src={"/dotstree.svg"}
        alt="diff"
      />
    </div>
  );
};

export default OurServices;
