import React from 'react'
import {BackgroundGradientAnimationDemo} from '../components/contactHeader';
import Form from '../components/form';

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
      <div className='w-full'>
        <Form />
      </div>
      <p className='text-center lg:text-5xl w-[80%] text-2xl font-light tracking-wide p-2 lg:mt-5 mt-32 mb-32'><span className='font-bold'>Thank you for exploring our website and diving into the world of Frenchie Pitbull puppies</span> with us! We&#39;re thrilled that you&#39;ve enjoyed your time here, and we can&#39;t wait to assist you further in <span className='font-bold bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-300 bg-clip-text text-transparent'>your journey to finding the perfect furry companion.</span></p>
    </div>
    
  )
}
