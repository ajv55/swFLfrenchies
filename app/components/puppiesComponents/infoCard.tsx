'use client';
import React from 'react'
import { useRef } from 'react';
import {motion, useScroll, useTransform} from 'framer-motion'
import { Meteors } from '../3dcard';
import { TextGenerateEffect } from '../text-generate';

type InfoCardProps = {
    words: string,
    title: string
}

export default function InfoCard({words, title}: InfoCardProps) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.2, 1.5]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.2, 1]);
    const x = useTransform(scrollYProgress, [1.2,0.7,0.5, 0.1], ['43%', '20%', '56%', '90%']);

  return (
    <motion.div ref={ref} style={{scale, x, opacity}} className='bg-fuchsia-100 shadow-md shadow-white rounded-md w-[17rem] h-[20rem] mb-64 relative px-2 py-1' >
        <div className='bg-slate-100 drop-shadow-xl rounded-lg w-[17rem] h-[20rem] absolute -top-3 left-2 -z-20'></div>
        <Meteors />
        <div className='w-4/5 h-full flex flex-col justify-start items-start p-2 gap-5'>
            <h1 className='text-center text-2xl bg-gradient-to-l to-purple-500 from-fuchsia-400 text-transparent bg-clip-text [text-shadow:2px_1px_1px_var(--tw-shadow-color)] shadow-purple-400'>{title}</h1>
            <TextGenerateEffect words={words}></TextGenerateEffect>
        </div>
    </motion.div>
)
}
