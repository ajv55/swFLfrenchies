'use client';
import { alex_brush } from "@/app/font/font";
import Image from "next/image";
import pup from '@/public/pup.jpg';
import {motion} from 'framer-motion';


export default function Parents() {
  return (
    <div className='w-full h-content flex flex-col justify-center items-center gap-14 mt-12 mb-12'>
        <h1 className={`${alex_brush.className} text-6xl bg-gradient-to-br from-purple-500 to-fuchsia-300 bg-clip-text text-transparent p-2 mt-5`}>My Parents</h1>
        <div className=' w-full h-content flex flex-col gap-6 justify-center items-center'>
            
            <motion.div initial={{scale: 0.2, opacity: 0.2, x: "100%", rotate: 180, scaleX: 0.1}} viewport={{once: true}} animate={{scale: 0.4, x: "40%", rotate: 180, scaleX: 0.1}}  transition={{duration: 1.25, ease: "easeInOut"}} whileInView={{scale: 1, opacity:1, x: "0%", rotate: 0, scaleX: 1}} className=" bg-slate-200 rounded-md w-[21rem] h-content flex flex-col justify-center items-center gap-14 px-1 py-7 drop-shadow-2xl">
                <Image className="rounded-full shadow-xl shadow-pink-300" src={pup} alt="pup" style={{width: '290px', height: '280px'}}></Image>
                <h1 className={`${alex_brush.className}  text-6xl bg-gradient-to-tl from-fuchsia-300 to-purple-500 bg-clip-text text-transparent`}>My Mom</h1>
            </motion.div>

            <motion.div initial={{scale: 0.2, opacity: 0.2, scaleX: 0.1, x: "100px", rotate: 180}} viewport={{once: true}} animate={{scale: 0.4, x: "-70%", rotate: 180, scaleX: 1 }}  transition={{duration: 1.25, ease: "easeInOut"}} whileInView={{scale: 1, opacity:1, x: "0%", rotate: 0, scaleX: 1}} className="  bg-slate-200 mt-10 rounded-md w-[21rem] h-content flex flex-col justify-center items-center gap-14 px-1 py-7 drop-shadow-2xl">
                <Image className="rounded-full shadow-xl shadow-blue-300" src={pup} alt="pup" style={{width: '290px', height: '280px'}}></Image>
                <h1 className={`${alex_brush.className}  text-6xl bg-gradient-to-tl from-blue-300 to-purple-500 bg-clip-text text-transparent`}>My Dad</h1>
            </motion.div>

            
            
        </div>
    </div>
  )
}
