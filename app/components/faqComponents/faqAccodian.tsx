'use client';
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { motion } from 'framer-motion'

type FaqAccordianProps = {
    answer: string,
    question: string,
}

export default function FaqAccordian({answer, question}: FaqAccordianProps ) {
    const [dropDown, setDropDown] = useState<boolean>(false)

  return (
    <div className='w-[75%] h-content flex flex-col justify-center items-center p-3 bg-slate-200'>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl lg:text-2xl tracking-wide font-bold">{question}</h1>
          <GoPlus onClick={() => setDropDown(!dropDown)} size={40} color='grey'/>
        </div>
        {dropDown && <motion.div initial={{scale: 0, opacity: 0, x: '-100%'}} viewport={{once: true}} transition={{duration: 0.4, ease: 'easeIn'}} animate={{x: '180%'}} whileInView={{scale: 1, opacity: 1, x: 0}} className=" w-full h-content p-3 flex justify-start items-start">
            <p className="text-2xl text-center font-light tracking-wider">{answer}</p>
        </motion.div> }
    </div>
  )
}
