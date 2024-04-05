import React from 'react'
import style from '../../style.module.css';
import { alex_brush } from '@/app/font/font';

export default function AboutUsHeader
() {
  return (
    <div className='text-center bg-gradient-to-tl from-slate-700 via-slate-600 to-slate-500 relative w-full h-[42rem] flex flex-col justify-center items-center'>
      <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
      <h1 className='text-white tracking-wider font-bold lg:text-5xl text-xl'><span className={`${alex_brush.className} text-6xl lg:text-9xl tracking-wider bg-gradient-to-br from-purple-400 via-pink-300 to-fuchsia-500 text-transparent bg-clip-text`}>Our Mission:</span> <br /> <span className=' bg-gradient-to-br from-violet-200 via-violet-500 to-violet-300 bg-clip-text text-transparent'>Bringing Joy</span> Through Frenchie Pitbull Puppies</h1>

    </div>
  )
}
