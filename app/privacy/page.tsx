import React from 'react';
import PrivacyHeader from '../components/privacyComponents/privacyHeader';
import PrivacySection from '../components/privacyComponents/privacySection';
import PrivacyInfo from '../components/privacyComponents/privacyInfo';
import PrivacyExtra from '../components/privacyComponents/privacyExtra';
import Form from '../components/form';
import { alex_brush } from '../font/font';

export default function Page() {
  return (
    <div>
        <PrivacyHeader />
        <PrivacySection />
        <PrivacyInfo />
        <PrivacyExtra />
        <Form />
        <p className='text-2xl text-center font-light tracking-wide p-2 mb-32 mt-10'>Thank you for trusting <span className={`${alex_brush.className} text-4xl bg-gradient-to-br from-purple-500 via-slate-400 to-pink-300 bg-clip-text text-transparent`}>SWFLFrenchies</span>. Your privacy and security are of utmost importance to us.</p>
    </div>
  )
}
