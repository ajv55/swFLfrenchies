'use client';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaWindowClose } from "react-icons/fa";

export default function TimedModal() {

    const [timeModal, setTimeModal] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);


    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
          console.log('page loaded');
          setTimeout(() => {
            setCount(65)
            setTimeModal(true)
          }, 3000);
          // do something else
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
          onPageLoad();
        } else {
          window.addEventListener('load', onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);


    
    

  return (
    <> 
    {timeModal && <div className=" fixed backdrop-blur-2xl z-40  top-0 left-0 bg-transparent w-[24rem] h-screen flex flex-col justify-center items-center gap-6">
         <FaWindowClose onClick={() => setTimeModal(false)} size={30} className="self-start ml-3" color="white"/>
         <h1 className="text-4xl text-center text-white font-bold tracking-widest leading-loose">This website is still under construction. Any question please contact us.</h1>
         <h6 className="text-center text-white text-md font-light tracking-widest">SITE NEARLY READY</h6>
         <div className="w-[15rem] relative h-9 mb-2 rounded-2xl bg-slate-700 overflow-hidden">
            
            <motion.div initial={{width: '0%'}} animate={{width: `${count}%`}} transition={{duration: 2.4, ease: 'easeInOut'}} className="absoulte top-0 left-0 flex justify-end items-end p-1   h-full bg-gradient-to-tl from-orange-300 via-orange-500 to-orange-700 text-white" >{count}%</motion.div>
         </div>
    </div>}
    </>
  )
}
