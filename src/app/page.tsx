import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Values from "./Components/Values";
import ValuesTwo from "./Components/ValuesTwo";
import Carousel from "./Components/Carousel";
import Image from "next/image";
import OurServices from "./Components/OurServices";
import WhatWeOffter from "./Components/WhatWeOffter";
import Portafolio from "./Components/Portafolio";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main id="home" className="flex flex-col justify-between ">
      <div className=" relative h-screen" id="banner">
        <Navbar />
        <Banner />
        <div className="w-full h-[100px] bottom-0  left-0 absolute ">
          <Image
            className="origin-right scale-105 object-cover"
            src="/test.svg"
            fill={true}
            // width={240}
            // height={328}
            alt="sphot"
          />
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" className='wage' viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L60,293.3C120,299,240,309,360,314.7C480,320,600,320,720,298.7C840,277,960,235,1080,234.7C1200,235,1320,277,1380,298.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        {/* <svg className='wage'  viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="#fff" offset="0%"></stop><stop stop-color="#fff" offset="100%"></stop></linearGradient></defs><path  fill="url(#sw-gradient-0)" d="M0,208L60,182C120,156,240,104,360,82.3C480,61,600,69,720,91C840,113,960,147,1080,169C1200,191,1320,199,1440,208C1560,217,1680,225,1800,199.3C1920,173,2040,113,2160,104C2280,95,2400,139,2520,130C2640,121,2760,61,2880,52C3000,43,3120,87,3240,108.3C3360,130,3480,130,3600,117C3720,104,3840,78,3960,86.7C4080,95,4200,139,4320,164.7C4440,191,4560,199,4680,203.7C4800,208,4920,208,5040,190.7C5160,173,5280,139,5400,112.7C5520,87,5640,69,5760,91C5880,113,6000,173,6120,195C6240,217,6360,199,6480,195C6600,191,6720,199,6840,203.7C6960,208,7080,208,7200,203.7C7320,199,7440,191,7560,182C7680,173,7800,165,7920,173.3C8040,182,8160,208,8280,208C8400,208,8520,182,8580,169L8640,156L8640,260L8580,260C8520,260,8400,260,8280,260C8160,260,8040,260,7920,260C7800,260,7680,260,7560,260C7440,260,7320,260,7200,260C7080,260,6960,260,6840,260C6720,260,6600,260,6480,260C6360,260,6240,260,6120,260C6000,260,5880,260,5760,260C5640,260,5520,260,5400,260C5280,260,5160,260,5040,260C4920,260,4800,260,4680,260C4560,260,4440,260,4320,260C4200,260,4080,260,3960,260C3840,260,3720,260,3600,260C3480,260,3360,260,3240,260C3120,260,3000,260,2880,260C2760,260,2640,260,2520,260C2400,260,2280,260,2160,260C2040,260,1920,260,1800,260C1680,260,1560,260,1440,260C1320,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z"></path></svg> */}
        <Image
          className="absolute bottom-0 left-0 -z-30"
          width={500}
          height={500}
          src={"/dotsfirts.svg"}
          alt="dots"
        />
      </div>
      <div className="h-24"></div>
      <div id="about">
        <Values />
        <ValuesTwo />
        <Carousel />
      </div>
      <div id="services" className="mb-[40px]">
        <OurServices />
      </div>
      <div id="offer" className="mb-[90px]">
        <WhatWeOffter />
      </div>

      <div id="portfolio" className="mb-[160px]">
        <Portafolio />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}
