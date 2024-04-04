'use client';
import { useRef } from 'react';
import {delay, motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { alex_brush, roboto } from '../font/font';

type CardProp = {
    name: string,
    age: string,
    price: number,
    gender: string,
    imgUrl: string,
    index: number,
}

export default function Card({name, age, gender, price, imgUrl, index}: CardProp) {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['end start', 'end end']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const h1Opacity = useTransform(scrollYProgress, [0.2, 1], [0.3, 1]);
    const textScale = useTransform(scrollYProgress, [0.5, 1], [0.4, 1]);
    const x = useTransform(scrollYProgress, [1,0.7,0.3, 0.1], ['0%', '35%', '60%', '80%']);


  return (
    <motion.div style={{scale: scale, opacity: opacity, x,}}   ref={ref} className='bg-slate-200 w-[17rem] lg:w-[32rem] h-[24rem] lg:h-[40rem] flex flex-col justify-start items-center py-4 px-2 rounded-lg lg:rounded-2xl lg:shadow-md lg:shadow-orange-100'>
        <motion.div className='relative p-3'>
            <Image src={imgUrl} alt={name} className='lg:w-[30rem] lg:h-[23rem] ' width={250} height={250}></Image>
            <motion.h1 style={{scale: textScale, opacity: h1Opacity, x, }}  className='text-center text-xs lg:text-lg bg-orange-300  absolute top-0 right-0 px-3 py-1 rounded-2xl '>{age}</motion.h1>
        </motion.div>
        <div className='flex justify-evenly items-center w-full px-1 py-2'>
            <motion.h1 style={{scale: textScale, opacity: h1Opacity, x, }}  className='text-center tracking-wide font-bold text-3xl lg:text-4xl'>{name}</motion.h1>
            <motion.h1 style={{scale: textScale, opacity: h1Opacity, x, }} className='text-center '>{gender === 'Male' ? <IoMdMale className='lg:w-14 lg:h-14' size={25} color='lightBlue'/> : <IoMdFemale className='lg:w-14 lg:h-14' size={25} color='lightPink'/>}</motion.h1>
        </div>
        <div className='w-full h-3/4 flex gap-7 flex-col justify-center items-center px-2 py-1.5'>
           <motion.h1 style={{scale: textScale, opacity: h1Opacity, x, }} className='text-center text-lg font-light tracking-wide lg:text-2xl '>${price}.00</motion.h1>
           <h1 className='bg-green-400 text-lg text-white px-4 py-1 rounded-xl lg:rounded-3xl lg:text-2xl '>Available</h1>
        </div>
    </motion.div>
  )
}
