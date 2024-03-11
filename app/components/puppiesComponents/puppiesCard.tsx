'use client';
import Image from 'next/image'
import React from 'react';
import Pup from '../../../public/pup.jpg';
import {motion, useScroll, useTransform, cubicBezier, easeInOut} from 'framer-motion'
import { useRef } from 'react';
import { BackgroundBeams } from '../bg';
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { Button } from "../../components/movingButton";

type PuppiesCardProps = {
    name: string,
    birthday: string,
    gender: string,
    price: number,
    age: string,
    description: string
}

export default function PuppiesCard({name, birthday, gender, price, age, description}: PuppiesCardProps) {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0.2, 1], [0.4, 1], {ease: easeInOut});
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1])

  return (

    <motion.div ref={ref} style={{scale, opacity}} className=' relative w-[21rem] drop-shadow-xl h-[50rem] flex flex-col justify-center items-center gap-24 bg-fuchsia-100 mt-10 mb-8'>
        <Image className=' absolute top-3 left-2'   src={Pup} alt='pup' width={352} height={100}></Image>
        <div className='[text-shadow:2px_1px_1px_var(--tw-shadow-color)] shadow-purple-300 flex flex-col justify-start items-start w-full h-content mt-72 p-2 gap-5'>
          <h1 className='text-3xl flex justify-center items-center gap-5'>{name} {gender === 'Male' ? <IoMdMale size={30} color='lightBlue' /> : <IoMdFemale size={30} color='lightPink' /> }</h1>
          <h2 className='text-2xl flex items-center gap-5'><span className='text-xl text-slate-500 opacity-35 '>Birthday</span>{birthday}</h2>
          <h2 className='text-2xl flex items-center gap-5'><span className='text-xl text-slate-500 opacity-35 '>Age</span>{age}</h2>
          <h2 className='text-2xl p-1 flex items-center gap-5'><span className='text-xl text-slate-500 opacity-35 '>Price</span>${price}.00</h2>
          <p className=' text-md '>{description}</p>
          <Button className='text-xl' >Reserve</Button>
        </div>     
    </motion.div> 
    
  )
}
