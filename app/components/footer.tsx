import React from 'react'

import style from '../style.module.css';
import Link from 'next/link';
import insta from '../../public/intsaLogo.svg';
import Image from 'next/image';

export default function Footer() {

    const date = new Date().getFullYear();

  return (
    <div className='relative w-full h-[28rem] bg-slate-700 flex flex-col justify-end items-center gap-6'>
        <div className={style.shape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.fill}></path>
            </svg>
        </div>

        <div className=" flex flex-col justify-center items-start gap-2">
            <Link href='https://www.instagram.com/'><Image src={insta} alt="insta" width={30} height={30}></Image></Link>
        </div>
        <div className=' flex  w-[37%] flex-wrap justify-center items-center h-32 gap-9'>
           <Link className="text-sm lg:text-xl font-light tracking-wide hover:underline underline-offset-2 text-white hover:text-2xl hover:text-blue-300" href='/'>Home</Link>
            <Link className="text-sm lg:text-xl font-light tracking-wide hover:underline underline-offset-2 text-white hover:text-2xl hover:text-purple-300" href='/'>Available Puppies</Link>
            <Link className="text-sm lg:text-xl font-light tracking-wide hover:underline underline-offset-2 text-white hover:text-teal-300 hover:text-2xl" href='/'>Contact Us</Link>
            <Link className='hover:underline underline-offset-2 text-sm font-light tracking-wide lg:text-xl text-white hover:text-2xl hover:text-pink-300' href='/privacy'>Privacy Policy</Link>
            <Link className='hover:underline underline-offset-2 text-sm font-light tracking-wide lg:text-xl text-white hover:text-2xl hover:text-cyan-400' href='/About'>About Us</Link>
            <Link className='hover:underline underline-offset-2 text-sm font-light tracking-wide lg:text-xl text-white hover:text-2xl hover:text-cyan-400' href='/faq'>FAQ&#39;s</Link>
        </div>
        <div className=" w-full h-8 flex justify-center items-end mb-10 text-white">
          <p className=" lg:text-xl font-light tracking-wider" >© {date} SWFLFrenchies. All rights reserved.</p>
        </div>
      </div>
  )
}
