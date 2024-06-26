'use client';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import {BreadcrumbWrapper} from '../breadcrumb';
import style from '@/app/style.module.css';
import Link from 'next/link';
import { BsCake2Fill } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { GiSittingDog } from "react-icons/gi";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import {  usePathname } from 'next/navigation';
import { sendEmail } from '@/app/action/sendEmail';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { alex_brush } from '@/app/font/font';
import { FaWindowClose } from "react-icons/fa";

type PupDetailProps = {
    name: string,
    age: string ,
    gender: string,
    birthday: string ,
    weight?: string,
    price: number | string | null,
    imgUrl: string,
    momsWeight: string,
    dadsWeight: string,
    breed: string,
    description: string,
    pupWeight: string
}

export default function PupDetail({name, birthday, age, pupWeight, gender, breed, weight, momsWeight, dadsWeight, imgUrl, price, description }: PupDetailProps) {

  const pathname = usePathname();
  const [modal, setModal] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
})



  const handleClick = () => {
    setModal(!modal);
  }

  useEffect(() => {
    if(sendEmailState.success) {
        toast.success('Email sent successfully!')
        }
    
    if ( sendEmailState.error) {
    toast.error('Message was not sent!')
    }

}, [sendEmailState])


  return (
    <div className=' w-full h-content mt-10 flex  flex-col justify-center  relative items-center'>
      {modal && <div className='top-0  backdrop-blur-2xl w-full flex justify-center items-center h-screen z-10  bg-transparent fixed'>
        <FaWindowClose onClick={handleClick} color='lightBlue' className=' absolute top-2 left-2' size={30}/>
      <form ref={ref} action={async (formData) => {
        sendEmailAction(formData);
        ref.current?.reset()
        setModal(!modal)

    }} className='  lg:w-[43rem] rounded-md flex lg:absolute lg:right-6 lg:top-2 bg-slate-100 flex-col justify-start items-center mt-16 w-[95%] h-[37rem] p-1.5'>
        <h1 className={`${alex_brush.className} text-center lg:hidden bg-gradient-to-bl from-fuchsia-700 via-fuchsia-400 to-fuchsia-200 bg-clip-text text-transparent text-7xl`}>Contact Us</h1>
            <div className="relative p-2 z-0 w-full mb-5 group mt-7">
                <input type="text" name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="firstname" className="peer-focus:font-medium absolute text-sm text-grey-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firstname</label>
            </div>
            <div className="relative p-2 z-0 w-full mb-5 group">
                <input type="text" name="lastname" id="lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="lastname" className="peer-focus:font-medium absolute text-sm text-grey-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lastname</label>
            </div>
            <div className="relative p-2 z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-grey-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative p-2 z-0 w-full mb-5 group">
                <textarea name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-grey-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>
            <button type="submit" className='text-white bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm lg:text-2xl lg:mt-5 px-5 py-2.5 text-center me-2 mb-2' >Submit</button>
        </form>
        </div>}


        <BreadcrumbWrapper path={pathname.slice(1, 8)}  id={name} />
        <Carousel className=' w-full h-[300px] md:w-[70%] md:h-[600px] mb-7' >
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
        </Carousel>
        <div className=' w-full flex  justify-between'>
          <div className=' w-64 lg:w-[50%] flex  flex-col lg:items-end justify-start items-left px-2 py-1 gap-7'>
            <h1 className='text-4xl w-48 flex tracking-wide lg:text-7xl justify-center  lg:w-[68%] items-center lg:gap-10 gap-2'>{name} <span className='text-xs'>{gender === 'Male' ? <BsGenderMale className='lg:w-16 lg:h-16' size={35} color='lightBlue'/> : <BsGenderFemale size={35} color='lightPink'/> }</span></h1>
            <h6 className='text-sm tracking-wider lg:text-lg ml-2.5 underline underline-offset-4 lg:mr-14'>{breed}</h6>
          </div>
          <div className=' w-56 relative  lg:w-[43%] flex justify-end lg:justify-center items-start px-2 py-2'>
            
            <h5 className='bg-orange-100 px-3.5 py-2.5 rounded-3xl text-center lg:text-2xl text-md'>{age}</h5>
          </div>
        </div>
        
        {/* action button goes here */}
        <div className='bg-slate-700  w-full h-content flex flex-col lg:justify-center lg:items-center  relative mt-10'>
          <div id='bottom-layer' className={style.custom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
                </svg>
            </div>
          <div className=' flex justify-evenly items-center lg:mt-16 lg:bg-slate-200 lg:rounded-xl lg:w-[60%] w-full h-28 lg:h-[10rem] mt-7 mb-5'> 
            <button onClick={handleClick} className='  px-4 py-4 rounded-xl bg-gradient-to-tr from-orange-200 to-fuchsia-600 text-white lg:text-4xl text-xl drop-shadow-xl [text-shadow:2px_1px_1px_var(--tw-shadow-color)]  shadow-purple-800 hover:bg-gradient-to-br hover:from-purple-700 hover:to-fuchsia-400 hover:shadow-fuchsia-400'>Ask About Me</button>
            <Link href='https://buy.stripe.com/test_3cscOcc0x59mbKMdQQ' className='  px-4 py-4 rounded-xl bg-gradient-to-tr from-orange-200 to-fuchsia-600 text-white lg:text-4xl text-xl drop-shadow-xl [text-shadow:2px_1px_1px_var(--tw-shadow-color)]  shadow-purple-800 hover:bg-gradient-to-br hover:from-purple-700 hover:to-fuchsia-400 hover:shadow-fuchsia-400'>Reserve Me</Link>
          </div>

          <div className=' flex flex-col justify-center lg:mt-20 items-center gap-3 w-full h-content p-2'>
            <h1 className='text-white lg:text-6xl text-4xl ml-3 font-light lg:mb-5'>About {name}</h1>
            <div className=' bg-slate-200  drop-shadow-lg shadow-lg shadow-fuchsia-200 lg:w-[55%] w-[22rem] lg:h-[20rem] h-[25rem] flex justify-center items-center rounded-md mb-10 mt-8 p-2'>
              <p className='border text-center text-xl lg:text-2xl'>{description}</p>
            </div>

            <div className='bg-slate-200 lg:w-[65%] w-full mt-8 drop-shadow-lg shadow-lg shadow-fuchsia-200 h-24 rounded-md flex justify-evenly items-center'>
              <h1 className='text-3xl lg:text-5xl font-light text-white lg:px-3 lg:py-2 px-2 py-1 rounded-2xl drop-shadow-xl bg-slate-700'>${price}.00</h1>
              <h2 className=' p-1 w-40 lg:text-lg lg:w-64 text-sm'>Finacing & Installments available, <Link className='text-blue-700 hover:underline hover:underline-offset-4 text-[16px] ' href='/'>Learn More</Link> </h2>
            </div>

            

            <div className='w-full h-content lg:mt-16 gap-8  flex lg:flex-row flex-wrap justify-evenly mt-7 mb-64'>
              <div className='border-b rounded-md lg:w-[43%]  w-full h-[16rem] lg:h-[20rem] shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <BsCake2Fill size={60} className='lg:w-24 lg:h-24' color='white'/>
                <h6 className=' tracking-widest text-white lg:text-xl text-md font-light'>Birthday</h6>
                <h3 className='text-white tracking-wider lg:text-4xl text-3xl'>{birthday}</h3>
              </div>
              <div className='border-b rounded-md lg:w-[43%]  w-full h-[16rem] lg:h-[20rem]  shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <FaWeightScale className='lg:w-24 lg:h-24'  size={60} color='white'/> 
                <h6 className='text-white tracking-widest lg:text-xl text-md font-light'>Weight</h6>
                <h3 className='text-white tracking-wide lg:text-4xl text-3xl'>{pupWeight}</h3>
              </div>
              <div className='border-b rounded-md  lg:w-[43%] w-full h-[16rem] lg:h-[20rem]  shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <GiSittingDog className='lg:w-24 lg:h-24'  size={60} color='lightBlue'/>
                <h6 className='text-white tracking-widest lg:text-xl text-md font-light'>Father&#39;s Weight</h6>
                <h3 className='text-white tracking-wide lg:text-4xl text-3xl'>{dadsWeight}</h3>
              </div>
              <div className='border-b rounded-md lg:w-[43%] w-full h-[16rem] lg:h-[20rem]  shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
              <GiSittingDog className='lg:w-24 lg:h-24'  size={60} color='lightPink'/>
                <h6 className='text-white tracking-widest lg:text-xl text-md font-light'>Mother&#39;s Weight</h6>
                <h3 className='text-white tracking-wide lg:text-4xl text-3xl'>{momsWeight}</h3>
              </div>

            </div>

          </div>

        </div>
        

    </div>
  )
}
