import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";

export default function PrivacyExtra() {
  return (
    <div className='w-full h-content mb-32 flex flex-col justify-start items-center '>
        <h2 className='text-[42px] leading-fixed text-center font-bold tracking-normal mt-20'>Data Security and Protection</h2>
        <ul className=' list-inside list-disc w-[22rem] p-2 flex flex-col justify-start items-center gap-12 mt-14'>
            <li className='text-lg text-left font-light tracking-wide '>We take data security seriously and implement appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. <span className='font-bold'>This includes using encryption, firewalls, and secure server technologies to safeguard your data.</span></li>
            <li className='text-lg text-left font-light tracking-wide '>We restrict access to your personal information to authorized personnel only and require them <span className='font-bold'>to maintain the confidentiality of your data.</span></li>
        </ul>
        <div className='w-full flex flex-col justify-start items-center mt-10 mb-10'>
          <h1 className='text-[42px] leading-fixed text-center font-bold tracking-normal mt-20'>Third-Party Disclosure</h1>
          <ul className=' list-inside list-disc w-[22rem] p-2 flex flex-col justify-start items-center gap-12 mt-14'>
              <li className='text-lg text-left font-light tracking-wide '><span className='font-bold'>We do not sell, trade, or otherwise transfer your personal information</span> to third parties without your consent, except as required by law or as necessary to provide services to you.</li>
              <li className='text-lg text-left font-light tracking-wide '>We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services to you. These third parties are contractually obligated to use your information only for the purposes specified by us and to <span className='font-bold'>maintain the confidentiality and security of your data.</span></li>
          </ul>
        </div>

        <div className='w-full flex flex-col justify-start items-center mt-5 mb-3'>
          <h1 className='text-[42px] leading-fixed text-center font-bold tracking-normal mt-20'>Your Rights and Choices</h1>
          <ul className=' list-inside list-disc w-[22rem] p-2 flex flex-col justify-start items-center gap-12 mt-14'>
              <li className='text-lg text-left font-light tracking-wide '><span className='font-bold'>You have the right to access, update, or delete the personal information</span> we hold about you. If you would like to exercise these rights or have any questions about our privacy practices, please contact us using the information provided below.</li> 
          </ul>
        </div>

        <div className='w-full flex flex-col justify-start items-center mt-2 '>
          <h1 className='text-[42px] leading-fixed text-center font-bold tracking-normal mt-20'>Changes to This Privacy Policy</h1>
          <ul className=' list-inside list-disc w-[22rem] p-2 flex flex-col justify-start items-center gap-12 mt-14'>
              <li className='text-lg text-left font-light tracking-wide '><span className='font-bold'>We reserve the right to update or amend this privacy policy at any time</span> to reflect changes in our business practices, legal requirements, or technological advancements. We encourage you to review this policy periodically for any updates.</li> 
          </ul>
          <p className='text-xl text-center mt-20 p-2'>If you have any questions, concerns, or requests regarding our privacy policy or the handling of your personal information, please contact us</p>
        </div>
    </div>
  )
}
