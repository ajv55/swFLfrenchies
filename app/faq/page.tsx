import React from 'react'
import FaqHeader from '../components/faqComponents/faqHeader'
import FaqSection from '../components/faqComponents/faqSection'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <FaqHeader/>
        <FaqSection/>
        <p className=' mb-32 text-4xl text-center tracking-wide w-[70%]'><span className='font-bold bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-200 bg-clip-text text-transparent'>If you have any additional questions or concerns</span> not addressed here, please don&#39;t hesitate to <Link href='/Contact' className='underline underline-offset-4'>contact us</Link>. We&#39;re here to assist you in <span className='font-bold'>finding the perfect Frenchie Pitbull puppy to join your family!</span></p>
    </div>
  )
}
