import React from 'react'
import ValueHeader from '../components/valueComponents/valueHeader'
import { alex_brush } from '../font/font'
import ValueInfo from '../components/valueComponents/valueInfo'

export default function Page() {
  return (
    <div className=' w-full h-content flex flex-col justify-center items-center'>
        <ValueHeader />
        <p className='text-xl text-center font-light tracking-wider mt-16 px-2'>At <span className={`${alex_brush.className} text-4xl bg-gradient-to-bl from-purple-500 via-slate-300 to-fuchsia-500 bg-clip-text text-transparent`}>SWFLFrenchies</span>, our values are the cornerstone of everything we do. They guide our decisions, actions, and interactions, ensuring that we uphold the highest standards of integrity, compassion, and excellence in our commitment to connecting families with Frenchie Pitbull puppies. Here&#39;s a detailed outline of our core values:</p>
        <ValueInfo />
    </div>
  )
}
