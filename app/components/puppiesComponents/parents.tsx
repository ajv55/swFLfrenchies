'use client';
import { alex_brush } from "@/app/font/font";
import Image from "next/image";
import pup from '@/public/pup.jpg';
import {motion} from 'framer-motion';


export default function Parents() {
  return (
    <div className='w-full h-content flex flex-col  justify-center items-center gap-14 mt-12 mb-12'>
        <h1 className={`${alex_brush.className} text-6xl lg:text-8xl bg-gradient-to-br from-purple-500 to-fuchsia-300 bg-clip-text text-transparent p-2 mt-5`}>My Parents</h1>
        <div className=' w-full h-content flex flex-col gap-6 justify-center items-center'>
            
            <motion.div initial={{scale: 0.2, opacity: 0.2, x: "100%", rotate: 180, scaleX: 0.1}} viewport={{once: true}} animate={{scale: 0.4, x: "40%", rotate: 180, scaleX: 0.1}}  transition={{duration: 1.25, ease: "easeInOut"}} whileInView={{scale: 1, opacity:1, x: "0%", rotate: 0, scaleX: 1}} className=" bg-slate-200 rounded-md lg:w-[40rem] w-[21rem] h-content  flex flex-col justify-center items-center gap-14 px-1 py-7 drop-shadow-2xl">
                <Image className="rounded-full shadow-xl w-72 h-72 lg:w-[440px] lg:h-[440px] shadow-pink-300" src={pup} alt="pup" width={0} height={0}  ></Image>
                <h1 className={`${alex_brush.className} lg:text-7xl tracking-wider text-6xl bg-gradient-to-tl from-fuchsia-300 to-purple-500 bg-clip-text text-transparent`}>My Mom</h1>
            </motion.div>

            <motion.div initial={{scale: 0.2, opacity: 0.2, scaleX: 0.1, x: "100px", rotate: 180}} viewport={{once: true}} animate={{scale: 0.4, x: "-70%", rotate: 180, scaleX: 1 }}  transition={{duration: 1.25, ease: "easeInOut"}} whileInView={{scale: 1, opacity:1, x: "0%", rotate: 0, scaleX: 1}} className="  bg-slate-200 mt-10 rounded-md lg:w-[40rem] w-[21rem] h-content flex flex-col justify-center items-center gap-14 px-1 py-7 drop-shadow-2xl">
                <Image className="rounded-full shadow-xl w-72 h-72 lg:w-[440px] lg:h-[440px] shadow-blue-300" src={pup} alt="pup" width={0} height={0}></Image>
                <h1 className={`${alex_brush.className} lg:text-7xl tracking-wider text-6xl bg-gradient-to-tl from-blue-300 to-purple-500 bg-clip-text text-transparent`}>My Dad</h1>
            </motion.div>

            
            
        </div>
    </div>
  )
}
