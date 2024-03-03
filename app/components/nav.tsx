'use client';

import Image from "next/image";
import Link from "next/link";
import {  MouseEventHandler, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from '../../public/logo.png';


type HamburgerProps = {
  onClick?: MouseEventHandler,
  isOpen?: boolean
}



export default function Nav(prop: HamburgerProps) {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = (e: any ) => {
    e.preventDefault();
    setIsOpen(!isOpen);

  }



  return (
    <div className="flex justify-between w-full absolute bg-transparent z-10">
    <div className="flex justify-between items-center w-full p-4">
      <Image src={Logo} alt='home page' width={110} height={110}></Image>
      <HiMenuAlt1 size={40} className="md:hidden" color="white" onClick={handleMenu}/>
    </div>
    {isOpen && <div className=" w-screen h-screen fixed bg-black-600 z-10 backdrop-blur-lg flex flex-col gap-9 items-end">
         <div className="flex justify-center items-end p-4">
          <GoX size={43} color="white" onClick={handleMenu}/>
         </div>
         <nav className='flex flex-col justify-center items-center w-screen h-screen gap-24 '>
            <Link onClick={() => setIsOpen(!isOpen)} href='/' className="text-white text-3xl" >Home</Link>
            <Link onClick={() => setIsOpen(!isOpen)} href='/Puppies' className="text-white text-3xl" >Puppies</Link>
            <Link onClick={() => setIsOpen(!isOpen)} href='/Contact' className="text-white text-3xl" >Contact Us</Link>
         </nav>
    </div>}
    <nav className="text-2xl text-white md:flex md:visible justify-evenly items-center border border-blue-500 w-full h-16 hidden">
        <Link href='/'>Home</Link>
        <Link href='/Puppies'>Our Puppies</Link>
        <Link href='/Contact'>Contact Us</Link>
    </nav>
    </div>
  )
}
