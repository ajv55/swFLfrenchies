import { alex_brush } from '@/app/font/font'
import React from 'react'

export default function ValueInfo() {
  return (
    <div className=' mt-20 mb-48 border-2 border-red-600 w-full h-content flex flex-col gap-9 justify-center items-start'>
        <div className='border w-full  flex flex-col justify-evenly items-center gap-3 h-[31rem] px-2.5 py-3 bg-slate-700 relative '>
         <span className='text-[10rem] opacity-30 absolute -top-9 left-0 text-white'>1</span>
          <h1 className='text-3xl font-bold tracking-wider self-end text-white'> Integrity </h1>
          <p className='text-center text-white tracking-wide font-light'>Integrity is the bedrock of our business. <span className=' bg-gradient-to-br from-amber-300 via-purple-200 to-fuchsia-500 bg-clip-text text-transparent'>We operate with honesty, transparency, and ethical conduct in all aspects of our operations, from breeding practices to customer interactions. We believe that trust is earned through integrity, and we are committed to maintaining the trust of our customers and partners at all times.</span> </p>
        </div>

        <div className='border w-full  flex flex-col justify-evenly items-center h-[31rem] px-2.5 py-3 bg-slate-700 relative '>
         <span className='text-[10rem] opacity-30 absolute -top-9 right-0 text-white'>2</span>
          <h1 className='text-3xl font-bold tracking-wider self-start text-white'> Compassion </h1>
          <p className='text-center text-white tracking-wide font-light'>Compassion is at the heart of everything we do.  We believe in treating all animals with kindness, empathy, and respect. <span className='bg-gradient-to-br from-amber-300 via-purple-200 to-fuchsia-500 bg-clip-text text-transparent'>Our commitment to compassion extends to our breeding practices, customer care, and support for animal welfare initiatives. We strive to create a world where every Frenchie Pitbull is valued, loved, and cared for.</span> </p>
        </div>

        <div className='border w-full  flex flex-col justify-evenly items-center gap-3 h-[31rem] px-2.5 py-3 bg-slate-700 relative '>
         <span className='text-[10rem] opacity-30 absolute -top-9 left-0 text-white'>3</span>
          <h1 className='text-3xl font-bold tracking-wider self-end text-white'>Quality</h1>
          <p className='text-center text-white tracking-wide font-light'>Quality is non-negotiable at <span className={`${alex_brush.className} text-4xl bg-gradient-to-bl from-purple-500 via-slate-300 to-fuchsia-500 bg-clip-text text-transparent`}>SWFLFrenchies</span>. <span className='bg-gradient-to-br from-amber-300 via-purple-200 to-fuchsia-500 bg-clip-text text-transparent'>We are dedicated to upholding the highest standards of excellence in the care, breeding, and upbringing of our Frenchie Pitbull puppies. </span> From health screenings to socialization to ongoing support, we prioritize quality in every aspect of our business to ensure that our puppies are healthy, happy, and well-adjusted.  </p>
        </div>

        <div className='border w-full  flex flex-col justify-evenly items-center h-[31rem] px-2.5 py-3 bg-slate-700 relative '>
         <span className='text-[10rem] opacity-30 absolute -top-9 right-0 text-white'>4</span>
          <h1 className='text-3xl font-bold tracking-wider self-start text-white'> Responsibility </h1>
          <p className='text-center text-white tracking-wide font-light'>Compassion is at the heart of everything we do.  We believe in treating all animals with kindness, empathy, and respect. <span className='bg-gradient-to-br from-amber-300 via-purple-200 to-fuchsia-500 bg-clip-text text-transparent'>Our commitment to compassion extends to our breeding practices, customer care, and support for animal welfare initiatives. We strive to create a world where every Frenchie Pitbull is valued, loved, and cared for.</span> </p>
        </div>
        <span className='bg-gradient-to-br from-amber-300 via-purple-200 to-fuchsia-500 bg-clip-text text-transparent'></span>
    </div>
  )
}


