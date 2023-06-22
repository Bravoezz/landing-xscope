"use client";
import Image from "next/image";
import React from "react";
import UnicValues from "./UnicValues";
import {Communication,Eficiency,Profesionalism,Responsability} from "@/app/Exports/IconsValues";

const Values = () => {
    const flex = "flex justify-center items-center";

  return (
    <div id="about" className="relative py-10 w-screen gap-16 flex items-end justify-center ">
      <UnicValues cls="eff" value="Efficiency" valueDetail="Efficient distribution of time and material resources for the project, making expedient decisions, resulting in the development of a competitive software product. It is one of the basic principles of VironIT.">
        <div className={`circle-value-pink h-[112px] w-[112px] ${flex} mb-[24px]`}>
          <Image className="z-30 "  src={Eficiency} width={48} height={48} alt="profesionalism"/>
        </div>
      </UnicValues>
      <UnicValues cls="prof" value="Professionalism" valueDetail="For us, it means professional fulfillment of our obligations, based on a deep understanding of development processes, solid knowledge, and experience, compliance with safety requirements and ensuring absolute confidentiality.">
        <div className={`circle-value-blue h-[112px] w-[112px] ${flex} mb-[24px]`}>
          <Image className="z-30"  src={Profesionalism} width={48} height={48} alt="profesionalism"/>
        </div>
      </UnicValues>
      <UnicValues cls="resp" value="Responsibility" valueDetail="VironIT takes responsibility for the quality of its services, for the expediency and soundness of the decisions made in the development process, for the fulfillment of its obligations, as well as for the confidence reposed by our customers, providing guaranteed maintenance of our software products.">
        <div className={`circle-value-pink h-[112px] w-[112px] ${flex} mb-[24px]`}>
          <Image  className="z-30" src={Responsability} width={48} height={48} alt="profesionalism"/>
        </div>
      </UnicValues>
      <UnicValues cls="comm" value="Communication" valueDetail="We provide instant support for our customers. We communicate where it is comfortable to you.">
        <div className={`circle-value-blue h-[112px] w-[112px] ${flex} mb-[24px]`}>
          <Image className="z-30"  src={Communication} width={48} height={48} alt="profesionalism"/>
        </div>
      </UnicValues>
     
      
      <Image
        className="absolute w-full top-14 left-0 -z-10"
        src="/lines.svg"
        width={100}
        height={100}
        alt="lines"
      />
      <Image
        className="absolute  right-16 top-0 "
        src="/About-us.svg"
        width={500}
        height={500}
        alt="about"
      />
    </div>
  );
};

export default Values;
