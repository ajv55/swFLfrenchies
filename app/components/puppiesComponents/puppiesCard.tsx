'use client';
import Image from 'next/image'
import React from 'react';
import Pup from '../../../public/pup.jpg';
import {motion, useScroll, useTransform, cubicBezier, easeInOut} from 'framer-motion'
import { useRef } from 'react';
import { BackgroundBeams } from '../bg';
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";

type PuppiesCardProps = {
    name: string,
    birthday: string,
    gender: string,
    price: number,
}

export default function PuppiesCard({name, birthday, gender, price}: PuppiesCardProps) {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.4, 1], {ease: cubicBezier(0.17, 0.67, 0.34, 0.87)});
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1])

  return (

    <motion.div ref={ref} style={{scale, opacity}} className='border relative w-[21rem] h-[36rem] flex flex-col justify-center items-center gap-24 bg-orange-100 mt-10 mb-8'>
        <Image className=' absolute top-3 left-2'   src={Pup} alt='pup' width={352} height={100}></Image>
        <div className='border border-red-400 flex flex-col justify-start items-start w-full h-2/4 mt-72 p-2'>
          <h1 className='text-3xl flex justify-center items-center gap-5'>{name} {gender === 'Male' ? <IoMdMale size={30} color='lightBlue' /> : <IoMdFemale size={30} color='lightPink' /> }</h1>
          <h2>{birthday}</h2>
        </div>
    </motion.div> 
    
  )
}
