"use client"
import Image from "next/image";
import React, { useState } from "react";
import {motion} from "framer-motion"

interface Mail {
    name:string;
    email:string;
    msg:string;
}

const ContactUs = () => {
    const [emailCli, setEmailCli] = useState<Mail>({
        name:"",
        email:"",
        msg:""
      })
    
      const handleChange = ({target}:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void => {
        setEmailCli(state => ({
          ...state,
          [target.name] : target.value
        }))
      }
  return (
    <div className="flex relative items-end min-[320px]:flex-wrap min-[320px]:justify-center gap-20 py-[75px] justify-center">
      <div className="flex flex-col justify-between items-start">
        <small className="sm block">Our</small>
        <div className="flex flex-col items-start gap-0 mb-[16px] justify-center">
          <p className="text-[#4661E9] ts font-black text-[28px]">Lets Talk</p>
          <p className="text-[#4661E9] ts font-black text-[28px]">Business!</p>
        </div>
        <small className="text-[12px] mb-[16px] w-[336px] h-[40px] flex flex-col">
          Lorem ipsum dolor sit amet, conse tetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore dolor
        </small>
        <Image
          className="w-full"
          src="/map.svg"
          alt="map"
          height={248}
          width={100}
        />
      </div>
      <div className="w-[500px] flex flex-col gap-2 items-center mb-7 justify-center">
        <div className="flex flex-row items-center gap-4 justify-between">
        <div className="flex gap-2 flex-col">
            <label className="font-semibold" htmlFor="name">Name</label>
            <input onChange={handleChange} value={emailCli.name} placeholder="..."  className="midle" type="text" name="name" id="name" />
        </div>
        <div className="flex gap-2 flex-col">
            <label className="font-semibold" htmlFor="email">Email</label>
            <input onChange={handleChange} value={emailCli.email} placeholder="..."  className="midle" type="text" name="email" id="email" />
        </div>
        </div>
        <div className="mb-[56px] gap-2 flex flex-col">
            <label className="font-semibold" htmlFor="msg">Message</label>
            <textarea className="desc"  onChange={handleChange} value={emailCli.msg} placeholder="Description" name="msg" id="msg" />
        </div>
      <motion.a
      transition={{ease:"easeIn"}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
       className="btnemail" href={`mailto:xscope_enterpise@gmail.com?subject=${emailCli.name}&body=${emailCli.msg}`}>Send now</motion.a>
      </div>

      <Image
          className="absolute left-52 top-0 -z-30"
          src="/contac-us.svg"
          alt="contact"
          height={96}
          width={252}
        />
      <Image
          className="absolute -bottom-80 left-0 -z-30"
          src="/lastsphot.svg"
          alt="contact"
          width={668}
          height={782}
        />
      <Image
          className="absolute right-56 top-15 -z-30"
          src="/dotstree.svg"
          alt="dots"
          width={435}
          height={424}
        />
    </div>
  );
};

export default ContactUs;
