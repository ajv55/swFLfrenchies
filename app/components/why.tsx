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
        <h1 className={`${alex_brush.className} text-6xl text-center  `}>Why Choose Us ?</h1>
        <p className='text-md text-center'>At Frenchie Haven, we&#39;re committed to providing you with the perfect Frenchie companion. Here&#39;s why we&#39;re your top choice for finding your furry friend.</p>
        <div className=' border w-[20rem] h-[19rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4'>
            <IoRibbon size={65}/>
            <h2 className='text-2xl text-center'>Quality Breeding</h2>
            <p className='text-sm text-center'>Our French Bulldog puppies come from champion bloodlines and are carefully bred for health, temperament, and conformation. We prioritize responsible breeding practices to ensure the well-being of our puppies.</p>
        </div>
        <div className=' border w-[20rem] h-[19rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4'>
            <MdHealthAndSafety size={65}/>
            <h2 className='text-2xl text-center'>Health Guarantee</h2>
            <p className='text-sm text-center'>We stand behind the health and quality of our puppies with a comprehensive health guarantee. Each puppy undergoes thorough health screenings and vaccinations before they are ready to join their new families.</p>
        </div>
        <div className=' border w-[20rem] h-[19rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 mt-2'>
            <FaHandHoldingHeart size={65}/>
            <h2 className='text-2xl text-center'>Expert Care</h2>
            <p className='text-sm text-center'>From birth, our French Bulldog puppies receive the utmost care and attention. They are raised in a loving home environment and socialized with people of all ages to ensure they grow into confident and well-adjusted companions.</p>
        </div>
        <div className=' border w-[20rem] h-[19rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 mt-2'>
            <HiCubeTransparent size={65}/>
            <h2 className='text-2xl text-center'>Transparent Practices</h2>
            <p className='text-sm text-center'>We believe in transparency and honesty in all our dealings. You can trust us to provide accurate information about our puppies, their lineage, and health records. We&#39;re happy to answer any questions you may have and provide references from satisfied customers.</p>
        </div>
        <div className=' border w-[20rem] h-[19rem] bg-slate-200 shadow-xl rounded-md flex flex-col justify-center items-center p-4 gap-4 mt-2'>
            <BsPersonFillCheck size={65}/>
            <h2 className='text-2xl text-center'>Satisfaction Guaranteed</h2>
            <p className='text-sm text-center'>Your satisfaction is our top priority. We strive to make your experience with us enjoyable and stress-free. From the moment you inquire about a puppy to long after you&#39;ve welcomed them into your home, we&#39;re dedicated to ensuring you&#39;re completely satisfied with your Frenchie companion.</p>
        </div>
    </div>
  )
}
