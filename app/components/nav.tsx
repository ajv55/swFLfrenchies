'use client';

import Image from "next/image";
import Link from "next/link";
import {  MouseEventHandler, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from '../../public/logo.png';
import {motion, AnimatePresence} from 'framer-motion'


type HamburgerProps = {
  onClick?: MouseEventHandler,
  isOpen?: boolean
}



export default function Nav(prop: HamburgerProps) {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = (e: any ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log('being clicked')

  }



  return (
    <div className="flex justify-between w-full absolute bg-transparent z-10 ">
    <div className="flex justify-between items-center w-full p-4">
      <Image src={Logo} alt='home page' width={110} height={110}></Image>
      <HiMenuAlt1 size={40} className="md:hidden" color="white" onClick={handleMenu}/>
    </div>
    <AnimatePresence>
      {isOpen && <motion.div initial={{scale: 0.2, opacity: 0.2, x: "-100%",}} animate={{x: '60%', scaleX: 0.3, rotate: 180}} transition={{duration: 1, ease: 'easeInOut'}}  whileInView={{scale: 1, opacity: 1, x: '0%', scaleX: 1, rotate: 0}} exit={{scale: 0.2, rotate: 180, opacity: 0.3, x: '-100%'}} className=" w-full h-screen fixed bg-slate-800 top-0 left-0 -z-0 flex flex-col gap-9 items-end">
            <div className="flex justify-center items-end p-4">
            <GoX size={43} color="white" onClick={handleMenu}/>
            </div>
            <nav className='flex flex-col justify-center items-center w-screen h-screen gap-24 '>
              <Link onClick={() => setIsOpen(!isOpen)} href='/' className="text-white text-3xl" >Home</Link>
              <Link onClick={() => setIsOpen(!isOpen)} href='/Puppies' className="text-white text-3xl" >Puppies</Link>
              <Link onClick={() => setIsOpen(!isOpen)} href='/Contact' className="text-white text-3xl" >Contact Us</Link>
            </nav>
      </motion.div>}
    </AnimatePresence>
    <nav className="text-2xl text-white md:flex md:visible justify-evenly items-center border border-blue-500 w-full h-16 hidden">
        <Link href='/'>Home</Link>
        <Link href='/Puppies'>Our Puppies</Link>
        <Link href='/Contact'>Contact Us</Link>
    </nav>
    </div>
  )
}
