'use client';
import { dancing_script } from '@/app/font/font';
import style from '@/app/style.module.css'
import {motion} from 'framer-motion'

export default function ValueHeader() {
  return (
    <div className=' bg-gradient-to-tl from-slate-700 to-slate-400 relative w-full h-screen flex flex-col justify-center items-center gap-5'>
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
        <motion.h1 initial={{scale: 3, opacity: 0, y: '-400%', x: '50%' , scaleY: 0.3, rotateZ: 360}} animate={{scaleY: 0.3, rotate: 210, scale: 0.5, y: '50%', rotateZ: 200  }} viewport={{once: true}} transition={{duration: 1.45, ease: 'circInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%', scaleY: 1, rotate: 0, rotateZ: 0, x: '0%'}} className={`${dancing_script.className} text-7xl text-center bg-gradient-to-bl from-purple-600 via-purple-300 to-fuchsia-500 bg-clip-text text-transparent`}>Our Values</motion.h1>
        <p className='font-light tracking-wide text-center text-white text-lg'>Where Puppy Love Meets Paw-sitive Principles</p>
    </div>
  )
}
