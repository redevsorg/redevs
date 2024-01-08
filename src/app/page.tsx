"use client"
import Image from 'next/image'
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoMdGlobe } from "react-icons/io";
import { TbDrone } from "react-icons/tb";
import { CgAdd } from "react-icons/cg";
import Link from 'next/link';
import React from "react";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center px-10 lg:px-0 justify-between py-10">
      <div className="z-10 fixed max-w-5xl w-full items-center px-20 justify-between text-xl lg:flex">
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
              <Link href='/' className='group-hover:scale-105'>home</Link>
            </div>
            <Link href='#about' className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>about</p>
            </Link>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>contact</p>
            </Link>
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
<div id="about"></div>
<Link href="#about" scroll={true} className='pt-[8rem] md:pt-[60px] lg:pt-[80px] opacity-90 animate-pulse'>
      <FiArrowDown size={40} />
      </Link>
      <div className="lg:-translate-y-[430px] md:-translate-y-[290%] -translate-y-[150%] lg:w-[800px] lg:text-center">
        <h1 className='text-6xl'>We build <b>professional websites</b> for <b>non-profits</b>.</h1>        
</div>
<div className='grid gap-10 grid-cols-1 w-full lg:px-20 lg:grid-cols-2 pb-20' data-aos="fade-up">
  <div>
    <h1 className='text-4xl font-semibold pb-3'>All non-profit organizations have one goal: helping people.</h1>
    <h1 className='text-3xl font-light '>We help them with it. We&apos;re <p className="font-semibold bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">redevs</p>.</h1>
    <hr className='my-6 border rounded-full border-neutral-800'></hr>
    <div className='grid rid-rows-1 grid-cols-2 lg:flex gap-3'>
    <button className='flex items-center gap-2 text-lg border w-fit p-3 rounded-full border-neutral-800 hover:scale-105' onClick={() => setShowModal(true)}><FiArrowRight></FiArrowRight>Meet the team</button>
    <button className='flex items-center gap-2 text-lg border w-fit p-3 rounded-full border-neutral-800 hover:scale-105'><FiArrowRight></FiArrowRight>Get in touch</button>
    <div className='flex items-center self-center gap-2 ml-auto invisible lg:visible'>
          <div className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <FaInstagram size={30}></FaInstagram>
          </div>
          <div className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <RiTwitterXFill size={30}></RiTwitterXFill>
          </div>
          <div className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <HiOutlineMail size={37}></HiOutlineMail>
          </div>
          </div>
    </div>
  </div>
  <div className='text-[1.1rem] font-light'>
    Redevs helps other non-profits connect to the world by offering a variety of free web development services. Founded by two high school students in 2023, we recruit a team of aspiring web developers to help our mission of helping other non-profits. We work with non-profits of all types to create both static and interactive websites to provide platforms for growth.
  </div>
</div>
<div className='grid'>
<div className=' p-0.5 rounded-full  w-fit place-self-center bg-gradient-to-r from-yellow-500 to-pink-500' data-aos="fade-up">
            <h1 className='bg-black rounded-full p-6 font-semibold text-[1.2rem] lg:text-[1.5rem]  text-center'>Connect your non-profit with the world.</h1>
          </div>
      <div className="gap-5 pt-5 lg:px-20 grid grid-cols-1 lg:grid-cols-3 w-full justify-center items-center pb-20 " data-aos="fade-up">
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>01</p>
            <h1 className='text-xl font-semibold'>Web Development</h1>
            <h1 className='font-light text-default pt-2'>We can help you build a professional and modern website to showcase your non-profit and spread your message, all free of charge. From simple static sites to larger scale platforms, we can help you with it all. </h1>
          </div>
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>02</p>
            <h1 className='text-xl font-semibold'>Backend Management</h1>
            <h1 className='font-light text-default pt-2'>Operating a larger platform can be tough, especially as a non-profit, but we are here to help. We can help you manage your backend and improve it to work with our frontend services, furthering your message.</h1>
          </div>
          <div className='border h-full border-[2px] p-6 rounded-lg border-neutral-800 hover:scale-[101%]'>
            <p className='font-mono text-sm opacity-50'>03</p>
            <h1 className='text-xl font-semibold'>User Services</h1>
            <h1 className='font-light text-default pt-2'>We can help you build an interactive website to serve your users and even collect monetary donations for your non-profit. Growing your non-profit and helping more people has never been easier.</h1>
          </div>
        </div>
          {showModal ? (
        <>
          <div
            data-aos='fade-up' className="justify-center top-0 items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[80%] translate-y-[10%] lg:translate-y-[0%] py-[10%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline outline-neutral-800 focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-2 border-solid border-neutral-800 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Our Team
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-xl text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 gap-10">
                  <div className='grid place-items-center gap-4 lg:grid-cols-2'>
                    <div className='grid place-items-center'>
                    <Image
              src="/sahith.JPG"
              alt="Sahith Panchumarthy"
              className="rounded-full self-center"
              width={200}
              height={200}
              priority
            />
            <p className='text-center pt-1 text-[1.2rem]'>Sahith Panchumarthy</p>
            <p className='text-center text-[1rem] opacity-50'>Co-Founder & President</p>
                    </div>
                    <div className='grid place-items-center'>
                    <Image
              src="/rohit.jpeg"
              alt="Rohit Sandadi"
              className="rounded-full self-center"
              width={200}
              height={200}
              priority
            />
            <p className='text-center pt-1 text-[1.2rem]'>Rohit Sandadi</p>
            <p className='text-center text-[1rem] opacity-50'>Co-Founder & President</p>
                    </div>
                  </div>
                  <hr className='my-6 border rounded-full border-neutral-800'></hr>
                  <p className="my-4 text-blueGray-500 text-center text-lg leading-relaxed">
                    We are always looking for new developers. If you are an aspiring web developer and would like to support our mission, feel free to contact us via our social media or contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className='grid lg:grid-cols-3 lg:px-20 pb-20 gap-6' data-aos='fade-up'>
      <div>
        <h1 className='text-7xl font-bold'><p className="bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">2+</p></h1>
        <h1 className='text-3xl font-light'>Non-profit websites created</h1>
      </div>
      <div className='flex items-center gap-2 justify-self-center '>
      <IoMdGlobe className='opacity-50' size={60}></IoMdGlobe>
        <h1 className='text-5xl text-center self-center opacity-50 font-bold'>globify</h1>
      </div>
      <div className='flex items-center gap-0 justify-self-end w-fill'>
      <TbDrone className='opacity-50' size={70}></TbDrone>
        <h1 className='text-3xl text-center self-center opacity-50 font-bold w-fill'>Drone Education Foundation</h1>
      </div>
      </div>   
      <form className="rounded-lg shadow-xl flex flex-col py-8 border border-2 border-neutral-800 lg:mx-20" data-aos="fade-up">
      <h1 className="text-3xl font-semibold  text-center ">Contact Us</h1>
      <h1 className="text-xl font-light opacity-50 text-center px-20">Want to work with us or would like to help us reach our mission? You can get in touch through the form below.</h1>
      <hr className='my-6 border border-neutral-800'></hr>
      <div className='px-8 flex flex-col'>
      <label htmlFor="fullname" className="text-white font-light mt-8 mb-2">Full name<span className="text-red-500 ">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />

      <label htmlFor="email" className="text-white font-light mt-4 mb-2 ">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />

      <label htmlFor="subject" className="text-white font-light mt-4 mb-2 ">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />

      <label htmlFor="message" className="text-white font-light mt-4 mb-2 ">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className=" mt-10 p-0.5 rounded-full w-fit place-self-center bg-gradient-to-r from-yellow-500 to-pink-500 flex flex-row items-center">
          <p className='bg-black rounded-full px-6 py-2  font-semibold text-[1rem] lg:text-[1.2rem]  text-center'>Send</p>
        </button>
      </div>
      </div>
    </form>
    <div>
    
    </div>
        </div>
        <div className='lg:invisible flex'>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="invisible lg:visible bottom-0 translate-y-6 text-base font-mono left-0 flex h-min pt-3 w-full items-center mt-20 px-5 border-neutral-800 bg-black border-t">
          <div className='grid grid-cols-2 w-full place-content-stretch'>
          <div className='grid grid-rows-3 grid-cols-2'>
          <div className="group">
              <Link href='/' className=''>home</Link>
            </div>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className=''>privacy</p>
            </Link>
            <Link href='#about' className="group opacity-50 hover:opacity-100">
              <p className=''>about</p>
            </Link>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className=''>terms</p>
            </Link>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className=''>contact</p>
            </Link>
          </div>
        </div>
        <div className='flex space-x-3 items-center'>
          <div className='opacity-50 hover:opacity-100 hover:scale-101'>
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
    </main>
  )
}
