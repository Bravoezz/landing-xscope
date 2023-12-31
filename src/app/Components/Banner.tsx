"use client"
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="ml-[188px] max-[800px]:ml-[20px] mt-[200px] flex flex-col items-start">
      <small className="text-white mb-5">XSCOPE</small>
      <h1 className="font-bold max-w-[576px] flex flex-col justify-center max-[800px]:text-3xl  text-[44px] leading-[50px] mb-10 text-white">
        Software Consulting and Development for your Digital Success.
      </h1>
      <motion.button 
      transition={{ease:"easeIn"}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="shadow-[0_4px_8px_0_rgba(245, 62, 62, 0.40)] shadow-md bg-[#F9546D] rounded-[56px] h-[40px] w-[144px] text-white ">
        <a href="#contact">
        Contact Us
        </a> 
      </motion.button>
    </div>
  );
};

export default Banner;
