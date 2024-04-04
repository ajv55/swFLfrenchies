import style from '../style.module.css';
import {alex_brush, roboto, frederick} from '../font/font';
import { TbPawFilled } from "react-icons/tb";
import Link from 'next/link';

export default function Ready() {
  return (
    <div className='w-full h-content relative bg-slate-700 mt-32 mb-28 flex flex-col justify-start items-center p-2 gap-6'>
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
        <h1 className={`${alex_brush.className} text-center text-6xl lg:text-9xl lg:w-4/4 lg:mb-5 bg-gradient-to-r from-fuchsia-500 via-blue-400 to-indigo-200 text-transparent bg-clip-text mt-64`}>Ready to Purchase a French Bulldog Puppy?</h1>
        <h1 className={`${roboto.className} text-center lg:text-3xl lg:w-2/4 lg:mb-5 text-md bg-gradient-to-r from-indigo-200  to-fuchsia-300 text-transparent bg-clip-text `}>Congratulations on finding your perfect Frenchie puppy! Here&#39;s what you need to know to ensure a smooth transition and a happy welcome home</h1>
        <div className={`${roboto.className} border-t-2 border-b-2 border-white w-full lg:w-1/2 h-[34rem] px-2 py-2 flex flex-col justify-center items-center gap-9`}>
            <h1 className='text-center text-white tracking-wide font-bold lg:text-4xl text-3xl'>Browse Available Puppies</h1>
            <TbPawFilled size={50} className='lg:w-28 lg:h-28' style={{color: '#f0abfc'}}/>
            <p className='text-center text-white lg:text-2xl tracking-wide text-lg '>Explore our selection of available French Bulldog puppies and find the perfect match for your lifestyle and preferences. <span className='font-bold'>Each puppy has their own unique personality and charm</span>, so take your time to find the one that captures your heart.</p>
        </div>


        <div className={`${roboto.className} border-b-2 border-white w-full lg:w-1/2 h-[34rem] px-2 py-2 flex flex-col justify-center items-center gap-9`}>
            <h1 className='text-center text-white tracking-wide font-bold lg:text-4xl text-3xl'>Contact Us</h1>
            <TbPawFilled className='lg:w-28 lg:h-28'  size={50} style={{color: '#f0abfc'}}/>
            <p className='text-center text-white text-lg lg:text-2xl '>Have questions about a specific puppy or the adoption process? Ready to schedule a visit to meet our puppies in person? Reach out to us via phone, email, or our online contact form. <span className='font-bold'>Our friendly team is here to assist you every step of the way and provide you with the information you need to make an informed decision.</span></p>
        </div>

        <div className={`${roboto.className} border-b-2 border-white w-full lg:w-1/2 h-[34rem] px-2 py-2  flex flex-col justify-center items-center gap-9`}>
            <h1 className='text-center text-white tracking-wide font-bold lg:text-4xl text-3xl'>Reserve Your Puppy</h1>
            <TbPawFilled className='lg:w-28 lg:h-28'  size={50} style={{color: '#f0abfc'}}/>
            <p className='text-center text-white text-lg lg:text-2xl tracking-wide '>Once you&#39;ve found the perfect Frenchie puppy, it&#39;s time to secure your spot as their new forever home. <span className='font-bold'>Reserve your puppy by completing our <Link className='underline underline-offset-4' href='/application'>adoption application</Link> and placing a deposit.</span> This ensures that your chosen puppy will be held for you until they are ready to join your family.</p>
        </div>

        <div className={`${roboto.className}  border-white w-full lg:w-1/2 h-[34rem] px-2 py-2 mb-56 flex flex-col justify-center items-center gap-9`}>
            <h1 className='text-center text-white text-3xl'>Prepare for Your New Arrival</h1>
            <TbPawFilled className='lg:w-28 lg:h-28'  size={50} style={{color: '#f0abfc'}}/>
            <p className='text-center text-white text-lg lg:text-2xl tracking-wide '>As you eagerly await the arrival of your new Frenchie puppy, <span className='font-bold'>take some time to prepare your home and gather essential supplies.</span> From cozy bedding to nutritious food and interactive toys, make sure you have everything your puppy will need to feel comfortable and loved from day one.</p>
        </div>

    </div>
  )
}
