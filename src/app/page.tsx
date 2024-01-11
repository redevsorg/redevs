"use client"
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoMdGlobe } from "react-icons/io";
import { TbDrone } from "react-icons/tb";
import Link from 'next/link';
import React, { useState } from "react";

export default function Home() {
  interface errorsType {
    fullname: string,
    email: string,
    subject: string,
    message: string
  } 
  const [showModal, setShowModal] = React.useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errors, setErrors] = useState({}) as [errorsType, any];
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      // @ts-ignore
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      // @ts-ignore
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      // @ts-ignore
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      // @ts-ignore
      tempErrors["message"] = true;
      isValid = false;
    }
    // @ts-ignore
    setErrors({ ...tempErrors });
    // @ts-ignore
    console.log("errors", errors);
    return isValid;
  };
  // @ts-ignore
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <main className="flex min-h-screen bg-black flex-col items-center px-10 lg:px-0 justify-between py-10">
      <script>
        {}
      </script>
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
          <Link href='#home' className="group">
              <p className='group-hover:scale-105'>home</p>
            </Link>
            <Link href='#about' className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>about</p>
            </Link>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className='group-hover:scale-105'>contact</p>
            </Link>
          </div>
        </div>
        <div className='flex space-x-3 items-center lg:hidden'>
          <Link href='https://www.instagram.com/re.devs/' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <FaInstagram size={30}></FaInstagram>
          </Link>
          <Link href='https://twitter.com/redevs_org' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <RiTwitterXFill size={30}></RiTwitterXFill>
          </Link>
          <Link href='mailto:redevsorg@gmail.com' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <HiOutlineMail size={37}></HiOutlineMail>
          </Link>
        </div>
        </div>
      </div>
      <section id="home"></section>
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

<section id="about">
<div className='grid gap-10 grid-cols-1 w-full lg:px-20 lg:grid-cols-2 pb-20' data-aos="fade-up">
  <div>
    <h1 className='text-4xl font-semibold pb-3'>All non-profit organizations have one goal: helping people.</h1>
    <h1 className='text-3xl font-light '>We help them with it. We&apos;re <p className="font-semibold bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">redevs</p>.</h1>
    <hr className='my-6 border rounded-full border-neutral-800'></hr>
    <div className='grid rid-rows-1 grid-cols-2 lg:flex gap-3'>
    <button className='flex items-center gap-2 text-lg border w-fit p-3 rounded-full border-neutral-800 hover:scale-105' onClick={() => setShowModal(true)}><FiArrowRight></FiArrowRight>Meet the team</button>
    <Link href='#contact' className='flex items-center gap-2 text-lg border w-fit p-3 rounded-full border-neutral-800 hover:scale-105'><FiArrowRight></FiArrowRight>Get in touch</Link>
    <div className='flex items-center self-center gap-2 ml-auto invisible lg:visible'>
    <Link href='https://www.instagram.com/re.devs/' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <FaInstagram size={30}></FaInstagram>
          </Link>
          <Link href='https://twitter.com/redevs_org' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <RiTwitterXFill size={30}></RiTwitterXFill>
          </Link>
          <Link href='mailto:redevsorg@gmail.com' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <HiOutlineMail size={37}></HiOutlineMail>
          </Link>
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
                  <p className="my-4 text-white text-center text-lg leading-relaxed">
                    We are always looking for new developers. If you are an aspiring web developer and would like to support our mission, feel free to contact us via our social media or contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      <div className='grid lg:grid-cols-3 lg:px-20 gap-6' data-aos='fade-up'>
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
      </div>
      </section>
      <section className='pt-20' id='contact'>
      <form className="rounded-lg shadow-xl flex flex-col py-8 border border-2 border-neutral-800 lg:mx-20" data-aos="fade-up">
      <h1 className="text-3xl font-semibold  text-center ">Contact Us</h1>
      <h1 className="text-xl font-light opacity-50 text-center px-5 lg:px-20">Want to work with us or would like to help us reach our mission? You can get in touch through the form below.</h1>
      <hr className='my-6 border border-neutral-800'></hr>
      <div className='px-8 flex flex-col'>
      <label htmlFor="fullname" className="text-white font-light mt-8 mb-2">Full name<span className="text-red-500 ">*</span></label>
      <input type="text" name="fullname"             value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />
      {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}
      <label htmlFor="email" className="text-white font-light mt-4 mb-2 ">E-mail<span className="text-red-500">*</span></label>
      <input type="email" value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />
      {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}
      <label htmlFor="subject" className="text-white font-light mt-4 mb-2 ">Subject<span className="text-red-500">*</span></label>
      <input type="text" value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }} name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300" />
      {errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
      <label htmlFor="message" className="text-white font-light mt-4 mb-2 ">Message<span className="text-red-500">*</span></label>
      <textarea name="message" value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-300"></textarea>
      {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
      <div className="flex flex-row items-center justify-start">
        <button onClick={handleSubmit} className=" hover:scale-105 mt-10 p-0.5 rounded-full w-fit place-self-center bg-gradient-to-r from-yellow-500 to-pink-500 flex flex-row items-center">
          <p className='bg-black rounded-full px-6 py-2  font-semibold text-[1rem] lg:text-[1.2rem]  text-center'>{buttonText}</p>
        </button>
      </div>
      <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
      </div>
    </form>
    </section>
    <div>
    
    </div>
        
        <div className='lg:invisible flex gap-5 font-mono text-center pt-20 bottom-0'>
          <Link href='/PrivacyPolicy.pdf' className="group opacity-50 hover:opacity-100">
              <p className=''>privacy</p>
            </Link>
        </div>
        <h3 className='opacity-50 hover:opacity-100'>Copyright © 2024 <p className="font-semibold bg-gradient-to-r from-yellow-500 to-pink-500 inline-block text-transparent bg-clip-text">redevs</p>.</h3>
        <div className="invisible lg:visible bottom-0 translate-y-6 text-base font-mono left-0 flex h-min pt-3 w-full items-center px-5 border-neutral-800 bg-black border-t">
          <div className='grid grid-cols-2 w-full place-content-stretch'>
          <div className='grid'>
          <Link href='/' className="group opacity-50 hover:opacity-100">
              <p className=''>home</p>
            </Link>
            <Link href='#about' className="group opacity-50 hover:opacity-100">
              <p className=''>about</p>
            </Link>
            <Link href='#contact' className="group opacity-50 hover:opacity-100">
              <p className=''>contact</p>
            </Link>
            <Link href='/PrivacyPolicy.pdf' className="group opacity-50 hover:opacity-100">
              <p className=''>privacy</p>
            </Link>
          </div>
        </div>
        <div className='flex space-x-3 items-center'>
        <Link href='https://www.instagram.com/re.devs/' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <FaInstagram size={30}></FaInstagram>
          </Link>
          <Link href='https://twitter.com/redevs_org' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <RiTwitterXFill size={30}></RiTwitterXFill>
          </Link>
          <Link href='mailto:redevsorg@gmail.com' className='opacity-50 hover:opacity-100 hover:scale-105 justify-end'>
            <HiOutlineMail size={37}></HiOutlineMail>
          </Link>
        </div>
        </div>
    </main>
  )
}
