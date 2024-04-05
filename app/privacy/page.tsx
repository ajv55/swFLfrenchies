import React from 'react';
import PrivacyHeader from '../components/privacyComponents/privacyHeader';
import PrivacySection from '../components/privacyComponents/privacySection';
import PrivacyInfo from '../components/privacyComponents/privacyInfo';
import PrivacyExtra from '../components/privacyComponents/privacyExtra';
import Form from '../components/form';
import { alex_brush } from '../font/font';

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <PrivacyHeader />
        <PrivacySection />
        <PrivacyInfo />
        <PrivacyExtra />
        <div className='w-full'>
          <Form />
        </div>
        <p className='text-2xl lg:text-4xl lg:w-[80%] text-center font-light tracking-wide p-2 lg:mt-0 mb-20 mt-10'>Thank you for trusting <span className={`${alex_brush.className} text-4xl tracking-wider lg:text-6xl bg-gradient-to-br from-purple-500 via-slate-400 to-pink-300 bg-clip-text text-transparent`}>SWFLFrenchies</span>. Your privacy and security are of <span className='font-bold'>utmost importance to us.</span></p>
    </div>
  )
}
