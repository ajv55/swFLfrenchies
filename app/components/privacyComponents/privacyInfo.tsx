import React from 'react'
import style from '@/app/style.module.css';

export default function PrivacyInfo() {
  return (
    <div className='bg-slate-700 w-full h-content relative flex flex-col justify-start items-center mt-20 mb-20 gap-16'>
        <div className={style.shape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.fill}></path>
            </svg>
        </div>
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
        {/*  */}
        <h1 className='text-white text-center mt-64 font-bold text-[42px] leading-fixed tracking-wide '>How We Use Your <span className=' bg-gradient-to-tr from-blue-800 via-cyan-200 to-blue-800 bg-clip-text text-transparent'>Information</span></h1>
        <div className='w-[21rem] h-[22rem] bg-neutral-200 flex flex-col justify-evenly p-3 shadow-xl shadow-cyan-700'>
            <h2 className='text-left font-bold tracking-wide text-2xl underline underline-offset-4'>Providing Services:</h2>
            <p className='text-left font-light tracking-normal text-lg'><span className='font-bold'>We use the information you provide to us to fulfill your requests, process orders, and deliver products</span> and services to you. This includes communicating with you about your orders, providing customer support, and responding to inquiries.</p>
        </div>

        <div className='w-[21rem] h-[22rem] bg-neutral-200 flex flex-col justify-evenly p-3 shadow-xl shadow-cyan-700'>
            <h2 className='text-left font-bold text-2xl underline underline-offset-4'>Improving Our Website:</h2>
            <p className='text-left font-light tracking-normal text-lg'> We may use information collected through cookies and other tracking technologies to analyze website traffic, monitor user behavior, <span className='font-bold'>and improve the functionality and performance of our website.</span></p>
        </div>

        <div className='w-[21rem] h-[24rem] bg-neutral-200 flex flex-col justify-evenly p-3 mb-64 shadow-xl shadow-cyan-700 '>
            <h2 className='text-left font-bold text-2xl underline underline-offset-4'>Marketing and Communications:</h2>
            <p className='text-left font-light tracking-normal text-lg'>With your consent, we may use your contact information to <span className='font-bold'>send you promotional materials, newsletters, and updates</span> about our products, services, and promotions. You have the option to opt out of receiving marketing communications at any time.</p>
        </div>


    </div>
  )
}
