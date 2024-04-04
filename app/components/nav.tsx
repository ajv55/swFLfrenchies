'use client';

import Image from "next/image";
import Link from "next/link";
import {  MouseEventHandler, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiCircleChevDown } from "react-icons/ci";
import Logo from '../../public/logo.png';
import {motion, AnimatePresence} from 'framer-motion';


type HamburgerProps = {
  onClick?: MouseEventHandler,
  isOpen?: boolean
}



export default function Nav(prop: HamburgerProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [accordian, setAccordian] = useState(false);

  const handleMenu = (e: any ) => {
    e.preventDefault();
    setIsOpen(!isOpen);

  }

  const handleAccordainLink = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setAccordian(!accordian)
  }




  return (
    <div className="flex justify-between items-center w-full h-32 absolute mt-2  bg-transparent  z-10 ">
    <div className="flex  justify-between items-center w-full lg:w-64 p-4">
      <Image src={Logo} alt='home page' className="lg:w-[130px]  lg:h-[130px] lg:mt-5 lg:ml-5" width={110} height={110}></Image>
      <HiMenuAlt1 size={40} className="md:hidden" color="white" onClick={handleMenu}/>
    </div>
    <AnimatePresence>
      {isOpen && <motion.div initial={{scale: 0.2, opacity: 0.2, x: "-100%",}} animate={{x: '60%', scaleX: 0.3, rotate: 180}} transition={{duration: 1, ease: 'backOut'}}  whileInView={{scale: 1, opacity: 1, x: '0%', scaleX: 1, rotate: 0}} exit={{scale: 0.2, rotate: 180, opacity: 0.2, x: '-100%', scaleX: 0.8}} className=" w-[22rem]  h-screen rounded-xl fixed bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900 backdrop-blur-xl top-0 left-0 z-0 flex flex-col  justify-center items-end">
            <div className=" w-full flex relative justify-center items-center p-6">
            <Image src={Logo}  alt="pup" style={{width: '100px', height: '100px'}}></Image>
            <GoX className="absolute top-0 right-0" size={43} color="white" onClick={handleMenu}/>
            </div>
            <nav className='flex flex-col justify-start items-center w-screen overflow-auto h-[78rem] mb-8 gap-14 '>
              <Link onClick={() => {setIsOpen(!isOpen); setAccordian(!accordian)}} href='/' className="text-white text-2xl  " >Home</Link>
              <Link onClick={() => {setIsOpen(!isOpen); setAccordian(!accordian)}}  href='/Puppies' className="text-white text-2xl " >Puppies</Link>
              <div className=" flex items-center gap-2">
                 <h1 className="text-white text-2xl  ">About Us</h1>
                 <CiCircleChevDown onClick={() => setAccordian(!accordian)} size={30} color="white"/>
              </div>
              <AnimatePresence>{accordian && <motion.div initial={{scale: 0, opacity: 0, y:'-100%', rotate: 90}} animate={{scale: 0.5, y: '40%', rotate: 120}} exit={{scale: 0.1, opacity: 0.1, y: '-100%', rotate: 180}} transition={{ease: 'easeInOut', duration: 0.4}} whileInView={{scale: 1, opacity: 1, y: '0%', rotate: 0}} className=" shadow-md shadow-white w-[11rem] h-[11rem] flex flex-col justify-evenly items-center overflow-scroll  rounded-xl"><Link onClick={() => {
                setIsOpen(!isOpen);
                setAccordian(!accordian)
              }}  className="text-lg text-white" href='/About'>Our Mission</Link><Link onClick={() => {
                setIsOpen(!isOpen);
                setAccordian(!accordian)
              }}  className="text-lg text-white" href='/Value'>Our Values</Link><Link onClick={() => {
                setIsOpen(!isOpen);
                setAccordian(!accordian)
              }}  className="text-lg text-white" href='/privacy'>Privacy Policy</Link></motion.div>}</AnimatePresence>
              <Link onClick={() => {setIsOpen(!isOpen); setAccordian(!accordian)}}  href='/Contact' className="text-white text-2xl " >Contact Us</Link>

              
            </nav>
      </motion.div>}
    </AnimatePresence>
    <nav className="text-2xl text-white md:flex md:visible justify-evenly items-center w-4/5 h-24 hidden">
        <Link href='/'>Home</Link>
        <Link href='/Puppies'>Our Puppies</Link>
        <Link href='/Contact'>Contact Us</Link>
        <Link href='/About'>About Us</Link>
        <Link className="text-white bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 " href='/Puppies'>Available Puppies</Link>
    </nav>
    </div>
  )
}
