import React from 'react'

import { alex_brush } from '../font/font';

//components
import PuppiesList from '../components/puppiesList';
import PuppiesInfo from '../components/puppiesComponents/puppiesInfo';
import Form from '../components/form';
import PupCareInfo from '../components/puppiesComponents/pupCareInfo';
import Link from 'next/link';


export default function Page() {
  return (
    <div>
        <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img1.wsimg.com/isteam/ip/a6b0b43f-f385-4405-82bc-646f3a983b54/Puppies%E2%AD%90.jpg")'
      }} className='w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative'>
         <h1 className={`${alex_brush.className} text-center tracking-wide lg:text-8xl text-6xl bg-gradient-to-r to-fuchsia-400 from-red-300 text-transparent bg-clip-text `}>Welcome to Our Frenchie Puppy Showcase</h1>
      </div>
      <PuppiesList />
      <PuppiesInfo />
      <PupCareInfo/>
      <Form />
     <div className='w-full flex justify-center items-center'>
       <p className='text-center text-3xl lg:text-5xl lg:w-[80%] lg:mt-5  mb-32 mt-32 p-2 font-light tracking-wide'>If you&#39;re <span className='font-bold'>interested in adopting one of our available puppies</span> or have any questions about Frenchie care, please don&#39;t hesitate to <Link href='/Contact' className='underline font-bold underline-offset-4'>reach out to us</Link>. <span className='font-bold bg-gradient-to-tl from-purple-900 via-purple-600 to-purple-300 bg-clip-text text-transparent'>We&#39;re here to help you find the perfect match</span> for your family!</p>
     </div>
    </div>
  )
}
