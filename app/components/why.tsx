import React from 'react';

import {alex_brush} from '../font/font';
import { IoRibbon } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi2";
import { BsPersonFillCheck } from "react-icons/bs";


export default function Why() {
  return (
    <div className='w-full h-content flex flex-col justify-start items-center gap-14 mt-20 p-2 mb-20'>
        <h1 className={`${alex_brush.className} text-6xl lg:text-8xl lg:mb-32 font-bold tracking-wider text-center  `}>Why Choose Us ?</h1>
        <p className='text-md lg:text-3xl lg:w-3/4 lg:mb-20 text-center'>At <span className={`${alex_brush.className} lg:text-6xl text-4xl bg-gradient-to-br from-purple-500 via-slate-400 to-fuchsia-500 bg-clip-text text-transparent`}>SWFLFrenchies</span>, <span className='font-bold'>we&#39;re committed to providing you with the perfect Frenchie companion.</span> Here&#39;s why we&#39;re your top choice for finding your furry friend.</p>
        <div className='w-full h-content flex  flex-wrap justify-center gap-20 lg:gap-32 items-center'>
                <div className=' w-[20rem] lg:w-[47rem] h-[19rem] lg:h-[28rem] bg-slate-200 shadow-xl lg:shadow-2xl rounded-md lg:rounded-2xl flex flex-col justify-center items-center p-4 gap-4 lg:gap-10'>
                        <IoRibbon className='lg:w-32 lg:h-32' size={65}/>
                        <h2 className='text-2xl lg:text-4xl font-bold tracking-wide text-center'>Quality Breeding</h2>
                        <p className='text-sm lg:text-xl font-light tracking-normal text-center'><span className='font-bold'>Our French Bulldog puppies come from champion bloodlines</span> and are carefully bred for health, temperament, and conformation. We prioritize responsible breeding practices to ensure the well-being of our puppies.</p>
                    </div>
                    <div className='  w-[20rem] lg:w-[32rem] h-[19rem] lg:h-[28rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 lg:gap-10'>
                        <MdHealthAndSafety className='lg:w-32 lg:h-32'  size={65}/>
                        <h2 className='text-2xl lg:text-4xl font-bold tracking-wide text-center'>Health Guarantee</h2>
                        <p className='text-sm lg:text-xl font-light tracking-normal  text-center'>We stand behind the health and quality of our puppies with a comprehensive health guarantee. <span className='font-bold'>Each puppy undergoes thorough health screenings and vaccinations before they are ready to join their new families.</span></p>
                    </div>
                    <div className='  w-[20rem] lg:w-[32rem] h-[19rem] lg:h-[28rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 lg:gap-10 '>
                        <FaHandHoldingHeart className='lg:w-32 lg:h-32' size={65}/>
                        <h2 className='text-2xl lg:text-4xl font-bold tracking-wide text-center'>Expert Care</h2>
                        <p className='text-sm lg:text-xl font-light tracking-normal text-center'><span className='font-bold'>From birth, our French Bulldog puppies receive the utmost care and attention.</span> They are raised in a loving home environment and socialized with people of all ages to ensure they grow into confident and well-adjusted companions.</p>
                    </div>
                    <div className='  w-[20rem] lg:w-[47rem]  h-[19rem] lg:h-[28rem] bg-slate-200 shadow-xl lg:shadow-2xl  rounded-md flex flex-col justify-center items-center p-4 gap-4 lg:gap-10'>
                        <HiCubeTransparent className='lg:w-32 lg:h-32' size={65}/>
                        <h2 className='text-2xl lg:text-4xl font-bold tracking-wide text-center'>Transparent Practices</h2>
                        <p className='text-sm lg:text-xl font-light tracking-normal text-center'>We believe in transparency and honesty in all our dealings. <span className='font-bold'>You can trust us to provide accurate information about our puppies, their lineage, and health records.</span> We&#39;re happy to answer any questions you may have and provide references from satisfied customers.</p>
                    </div>
                    <div className='  w-[20rem] lg:w-[47rem] h-content lg:h-[28rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 lg:gap-10 '>
                        <BsPersonFillCheck className='lg:w-32 lg:h-32' size={65}/>
                        <h2 className='text-2xl lg:text-4xl font-bold tracking-wide text-center'>Satisfaction Guaranteed</h2>
                        <p className='text-sm lg:text-xl font-light tracking-normal text-center'>Your satisfaction is our top priority. <span className='font-bold'>We strive to make your experience with us enjoyable and stress-free.</span> From the moment you inquire about a puppy to long after you&#39;ve welcomed them into your home, we&#39;re dedicated to ensuring you&#39;re completely satisfied with your Frenchie companion.</p>
                    </div>
        </div>
    </div>
  )
}
