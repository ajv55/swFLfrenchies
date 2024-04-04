import React from 'react'

import { alex_brush } from '../font/font';

//components
import PuppiesList from '../components/puppiesList';
import PuppiesInfo from '../components/puppiesComponents/puppiesInfo';
import Form from '../components/form';


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
      <Form />
    </div>
  )
}
