import React from 'react'
import ValueHeader from '../components/valueComponents/valueHeader'
import { alex_brush } from '../font/font'
import ValueInfo from '../components/valueComponents/valueInfo'
import Image from 'next/image'

export default function Page() {
  return (
    <div className=' w-full h-content flex flex-col justify-center items-center'>
        <ValueHeader />
        <p className='text-xl text-center font-light tracking-wider mt-28 mb-5 px-2'>At <span className={`${alex_brush.className} text-4xl bg-gradient-to-bl from-purple-500 via-slate-300 to-fuchsia-500 bg-clip-text text-transparent`}>SWFLFrenchies</span>, our values are the cornerstone of everything we do. They guide our decisions, actions, and interactions, ensuring that we uphold the highest standards of integrity, compassion, and excellence in our commitment to connecting families with Frenchie Pitbull puppies. Here&#39;s a detailed outline of our core values:</p>
        <ValueInfo />
        <div className='relative'>
          <div style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("https://miro.medium.com/v2/resize:fit:828/1*1kH7C54AP5DGscp_st8eoQ.jpeg")'
          }} className=' bg-cover bg-center w-[21rem] h-[32rem] mb-24'>
              {/* <Image src='https://miro.medium.com/v2/resize:fit:828/1*1kH7C54AP5DGscp_st8eoQ.jpeg' alt='puppy' width={300} height={400}></Image> */}
          </div>
          <div className='w-[21rem] h-[32rem] top-2 shadow-lg shadow-fuchsia-200 right-2 -z-10 bg-pink-200 absolute'></div>
        </div>
        <p className='text-2xl text-center font-ligt tracking-wide mb-28 pt-12 pb-12 px-2'>These values define who we are at <span className={`${alex_brush.className} text-5xl bg-gradient-to-bl from-purple-500 via-slate-400 to-fuchsia-500 bg-clip-text text-transparent`}>SWFLFrenchies</span> and serve as our guiding principles as we strive to fulfill our mission of connecting hearts with Frenchie Pitbull puppies. Thank you for joining us on this journey.</p>
    </div>
  )
}
