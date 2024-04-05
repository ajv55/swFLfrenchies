import { alex_brush } from '@/app/font/font'
import React from 'react'

export default function PrivacySection() {
  return (
    <div className=' w-full h-content mt-32 mb-20 flex flex-col justify-center items-center gap-6'>
        <p className='text-center text-xl lg:text-3xl lg:w-[82%] font-light tracking-wide'>At <span className={`${alex_brush.className} px-2 text-center text-5xl lg:text-6xl tracking-wider  bg-gradient-to-bl from-purple-800 via-purple-500 to-purple-200 bg-clip-text text-transparent `}>SWFLFrenchies</span> we are <span className='font-bold'>committed to protecting the privacy and security</span> of our customers&#39; personal information. This privacy policy outlines how we collect, use, and <span className='font-bold'>safeguard the information you provide</span> to us when you visit our website or engage with our services in your quest for Frenchie Pitbull puppies.</p>
        <div className=' w-full h-content p-1 flex flex-col  justify-evenly items-center lg:gap-20 gap-10'>
            <h2 className='text-[42px] lg:text-6xl leading-fixed text-center font-bold tracking-wider mt-20'>Information We Collect</h2>
            <div className=' bg-neutral-200 w-full lg:w-[55%] lg:h-[28rem] rounded-3xl shadow-md shadow-zinc-900 h-[23rem] flex flex-col justify-evenly items-center'>
                <h2 className='text-3xl lg:text-5xl text-center font-bold tracking-wide'>Personal Information</h2>
                <p className='text-lg lg:text-2xl lg:w-[80%] text-center font-light tracking-tight px-3'> When you interact with our website, we may collect personal information such as your name, email address, phone number, and mailing address. <span className='font-bold '>This information is collected when you voluntarily provide it to us</span>, such as when filling out a contact form or placing an order.</p>
            </div>

            <div className=' bg-neutral-200 w-full lg:w-[55%] lg:h-[28rem]  rounded-3xl shadow-md shadow-zinc-900 h-[23rem] flex flex-col justify-evenly items-center'>
                <h2 className='text-3xl lg:text-5xl  text-center font-bold tracking-wide'>Payment Information</h2>
                <p className='text-lg lg:text-2xl lg:w-[80%] text-center font-light tracking-tight px-3'> If you make a purchase through our website, we may collect payment information such as credit card details to process your transaction securely. <span className=' font-bold'>However, we do not store your payment information on our servers after the transaction is completed.</span></p>
            </div>

            <div className=' bg-neutral-200 w-full lg:w-[55%] lg:h-[28rem] rounded-3xl shadow-md shadow-zinc-900 h-[23rem] flex flex-col justify-evenly items-center'>
                <h2 className='text-3xl lg:text-5xl  text-center font-bold tracking-wide'>Device Information</h2>
                <p className='text-lg lg:text-2xl lg:w-[80%] text-center font-light tracking-tight px-3'> We may also collect information about your device, including your IP address, browser type, and operating system, to optimize your browsing experience and <span className='font-bold '> ensure the security of our website.</span></p>
            </div>

            <div className=' bg-neutral-200 w-full lg:w-[55%] lg:h-[28rem] rounded-3xl shadow-md shadow-zinc-900 h-[23rem] flex flex-col justify-evenly items-center'>
                <h2 className='text-3xl lg:text-5xl  text-center font-bold tracking-wide'>Cookies</h2>
                <p className='text-lg lg:text-2xl lg:w-[80%] text-center font-light tracking-tight px-3'> <span className=' font-bold'>Like many websites, we use cookies to enhance your browsing experience</span> and collect information about how you interact with our site. Cookies are small text files stored on your device that help us analyze website traffic, personalize content, and remember your preferences. <span className='font-bold'></span></p>
            </div>


        </div>
    </div>
  )
}
