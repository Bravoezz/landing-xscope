import Image from 'next/image'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Values from './Components/Values'

export default function Home() {
    
  return (
    <main className="flex flex-col justify-between ">
      <div className='h-screen'id='banner'>
      <Navbar />
      <Banner />
      <svg className='wage' viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="#fff" offset="0%"></stop><stop stop-color="#fff" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,75L60,62.5C120,50,240,25,360,35C480,45,600,90,720,110C840,130,960,125,1080,115C1200,105,1320,90,1440,72.5C1560,55,1680,35,1800,32.5C1920,30,2040,45,2160,65C2280,85,2400,110,2520,100C2640,90,2760,45,2880,25C3000,5,3120,10,3240,30C3360,50,3480,85,3600,102.5C3720,120,3840,120,3960,112.5C4080,105,4200,90,4320,72.5C4440,55,4560,35,4680,45C4800,55,4920,95,5040,92.5C5160,90,5280,45,5400,27.5C5520,10,5640,20,5760,25C5880,30,6000,30,6120,47.5C6240,65,6360,100,6480,100C6600,100,6720,65,6840,47.5C6960,30,7080,30,7200,45C7320,60,7440,90,7560,90C7680,90,7800,60,7920,57.5C8040,55,8160,80,8280,87.5C8400,95,8520,85,8580,80L8640,75L8640,150L8580,150C8520,150,8400,150,8280,150C8160,150,8040,150,7920,150C7800,150,7680,150,7560,150C7440,150,7320,150,7200,150C7080,150,6960,150,6840,150C6720,150,6600,150,6480,150C6360,150,6240,150,6120,150C6000,150,5880,150,5760,150C5640,150,5520,150,5400,150C5280,150,5160,150,5040,150C4920,150,4800,150,4680,150C4560,150,4440,150,4320,150C4200,150,4080,150,3960,150C3840,150,3720,150,3600,150C3480,150,3360,150,3240,150C3120,150,3000,150,2880,150C2760,150,2640,150,2520,150C2400,150,2280,150,2160,150C2040,150,1920,150,1800,150C1680,150,1560,150,1440,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className='wage' viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L60,293.3C120,299,240,309,360,314.7C480,320,600,320,720,298.7C840,277,960,235,1080,234.7C1200,235,1320,277,1380,298.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
      {/* <svg className='wage'  viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="#fff" offset="0%"></stop><stop stop-color="#fff" offset="100%"></stop></linearGradient></defs><path  fill="url(#sw-gradient-0)" d="M0,208L60,182C120,156,240,104,360,82.3C480,61,600,69,720,91C840,113,960,147,1080,169C1200,191,1320,199,1440,208C1560,217,1680,225,1800,199.3C1920,173,2040,113,2160,104C2280,95,2400,139,2520,130C2640,121,2760,61,2880,52C3000,43,3120,87,3240,108.3C3360,130,3480,130,3600,117C3720,104,3840,78,3960,86.7C4080,95,4200,139,4320,164.7C4440,191,4560,199,4680,203.7C4800,208,4920,208,5040,190.7C5160,173,5280,139,5400,112.7C5520,87,5640,69,5760,91C5880,113,6000,173,6120,195C6240,217,6360,199,6480,195C6600,191,6720,199,6840,203.7C6960,208,7080,208,7200,203.7C7320,199,7440,191,7560,182C7680,173,7800,165,7920,173.3C8040,182,8160,208,8280,208C8400,208,8520,182,8580,169L8640,156L8640,260L8580,260C8520,260,8400,260,8280,260C8160,260,8040,260,7920,260C7800,260,7680,260,7560,260C7440,260,7320,260,7200,260C7080,260,6960,260,6840,260C6720,260,6600,260,6480,260C6360,260,6240,260,6120,260C6000,260,5880,260,5760,260C5640,260,5520,260,5400,260C5280,260,5160,260,5040,260C4920,260,4800,260,4680,260C4560,260,4440,260,4320,260C4200,260,4080,260,3960,260C3840,260,3720,260,3600,260C3480,260,3360,260,3240,260C3120,260,3000,260,2880,260C2760,260,2640,260,2520,260C2400,260,2280,260,2160,260C2040,260,1920,260,1800,260C1680,260,1560,260,1440,260C1320,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z"></path></svg> */}
      </div>
      <div className='h-24 bg-slate-500'>
      </div>
      <Values />
     
      
     {/*  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

    
    </main>
  )
}
