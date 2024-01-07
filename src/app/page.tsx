import Image from 'next/image'
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowDown } from "react-icons/fi";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 fixed max-w-5xl w-full items-center justify-between text-xl lg:flex">
        <div className="fixed left-0 top-0 space-x-2 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-black/50 from-inherit lg:static lg:w-auto lg:border lg:rounded-full lg:p-4">
        <Image
              src="/iconsvg.svg"
              alt="redevs logo"
              className=""
              width={24}
              height={24}
              priority
            />
          
          <p className='pb-1 font-semibold'>redevs</p>
        </div>
        <div className="fixed bottom-0 text-base font-mono left-0 flex h-min p-3 w-full items-center px-5 border-neutral-800 bg-black lg:backdrop-blur-2xl lg:border-neutral-800 lg:border-b lg:border-r lg:border-l lg:rounded-full lg:border-full lg:bg-black/50 border-t lg:static lg:h-auto lg:w-auto">
          <div className='grid grid-cols-2 w-full place-content-stretch lg:grid-cols-1'>
          <div className='grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1'>
          <div className="group">
              <p className='group-hover:scale-105'>home</p>
            </div>
            <div className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>about</p>
            </div>
            <div className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>contact</p>
            </div>
          </div>
        </div>
        <div className='flex space-x-3 items-center lg:hidden'>
          <div className='opacity-50 hover:opacity-100 hover:scale-105'>
            <FaInstagram size={25}></FaInstagram>
          </div>
          <div className='opacity-50 hover:opacity-100 hover:scale-105'>
            <RiTwitterXFill size={25}></RiTwitterXFill>
          </div>
          <div className='opacity-50 hover:opacity-100 hover:scale-105'>
            <HiOutlineMail size={32}></HiOutlineMail>
          </div>
        </div>
        </div>
      </div>
<div className='lg:pt-[5rem] md:pt-[4rem] pt-[6rem]'></div>      
      <div className='aspect-square w-3/4 md:w-1/2 lg:w-[500px]'>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" opacity="0.65"><defs><linearGradient gradientTransform="rotate(150, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ffflux-gradient"><stop stopColor="#F67FEA" stopOpacity="1" offset="0%"></stop><stop stopColor="#DEE047" stopOpacity="1" offset="100%"></stop></linearGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.003 0.003" numOctaves="1" seed="158" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
  <feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
  <feBlend mode="hard-light" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
  <feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix>
</filter></defs><rect width="100%" height="100%" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect></svg>
</div>
<Link href="#about" scroll={true} className='pt-[8rem] md:pt-[60px] lg:pt-[80px] opacity-90 animate-pulse'>
      <FiArrowDown size={40} />
      </Link>
      <div className="lg:-translate-y-[430px] md:-translate-y-[290%] -translate-y-[150%] lg:w-[800px] lg:text-center">
        <h1 className='text-6xl'>We build <b>professional websites</b> for <b>non-profits</b>.</h1>        
</div>
<div id="about"></div>
<div className=' p-0.5 rounded-full w-fit place-self-center bg-gradient-to-r from-yellow-500 to-pink-500 '>
            <h1 className='bg-black rounded-full p-6 font-semibold text-[1.2rem] lg:text-[1.5rem]  text-center'>Connect your non-profit with the world.</h1>
          </div>
      <div className="gap-5 pt-5 lg:px-20 grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center pb-20 " data-aos="fade-up">
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>01</p>
            <h1 className='text-xl font-semibold'>A non-profit for non-profits.</h1>
            <h1 className='font-light text-default pt-2'>Redevs is a non-profit that operates as a web development firm to help non-profits connect with the world and create greater good. Currently, we operate as a non for profit organization but we plan to register as an official NPO.</h1>
          </div>
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>02</p>
            <h1 className='text-xl font-semibold'>Spread your mission.</h1>
            <h1 className='font-light text-default pt-2'>We help non-profits spread their mission by providing with them with a platform that connects them with the world. Websites allow for non-profits to reach wider audiences and impact the global scene.</h1>
          </div>
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>03</p>
            <h1 className='text-xl font-semibold'>Help more people.</h1>
            <h1 className='font-light text-default pt-2'>Helping people is the core purpose of all non-profits, including redevs. By partnering with us to spread your mission, we will help more people together and make the world a better place.</h1>
          </div>
        </div>
    </main>
  )
}
