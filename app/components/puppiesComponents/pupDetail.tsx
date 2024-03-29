'use client';
import Image from 'next/image';
import React, { use } from 'react';
import { Carousel } from 'flowbite-react';
import {BreadcrumbWrapper} from '../breadcrumb';
import { Button } from 'flowbite-react';
import style from '@/app/style.module.css';
import Link from 'next/link';
import { BsCake2Fill } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { GiSittingDog } from "react-icons/gi";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TextRevealCardPreview } from '../textText';
import {  usePathname } from 'next/navigation';

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

  return (
    <div className=' w-full h-content mt-10 flex flex-col justify-center items-center'>
        <BreadcrumbWrapper path={pathname.slice(1, 8)}  id={name} />
        <Carousel className=' w-full h-[300px] md:w-[32rem] md:h-[30rem] mb-7' >
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
            <Image src={imgUrl} alt='number' width={200} height={300}></Image>
        </Carousel>
        <div className=' w-full flex justify-between'>
          <div className=' w-64 flex flex-col justify-start items-left px-2 py-1 gap-7'>
            <h1 className='text-4xl w-48 flex justify-center items-center gap-2'>{name} <span className='text-xs'>{gender === 'Male' ? <BsGenderMale size={35} color='lightBlue'/> : <BsGenderFemale size={35} color='lightPink'/> }</span></h1>
            <h6 className='text-sm ml-2.5 underline underline-offset-4'>{breed}</h6>
          </div>
          <div className=' w-56 relative flex justify-end items-start px-2 py-2'>
            
            <h5 className='bg-orange-100 px-3.5 py-2.5 rounded-3xl text-center text-md'>{age}</h5>
          </div>
        </div>
        
        {/* action button goes here */}
        <div className='bg-slate-700  w-full h-content flex flex-col  relative mt-10'>
          <div id='bottom-layer' className={style.custom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
                </svg>
            </div>
          <div className=' flex justify-evenly items-center w-full h-28 mt-7 mb-5'> 
            <button className='  px-4 py-4 rounded-xl bg-gradient-to-tr from-orange-200 to-fuchsia-600 text-white text-xl drop-shadow-xl [text-shadow:2px_1px_1px_var(--tw-shadow-color)]  shadow-purple-800 hover:bg-gradient-to-br hover:from-purple-700 hover:to-fuchsia-400 hover:shadow-fuchsia-400'>Ask About Me</button>
            <button className='  px-4 py-4 rounded-xl bg-gradient-to-tr from-orange-200 to-fuchsia-600 text-white text-xl drop-shadow-xl [text-shadow:2px_1px_1px_var(--tw-shadow-color)]  shadow-purple-800 hover:bg-gradient-to-br hover:from-purple-700 hover:to-fuchsia-400 hover:shadow-fuchsia-400'>Reserve Me</button>
          </div>

          <div className=' flex flex-col gap-3 w-full h-content p-2'>
            <h1 className='text-white text-4xl ml-3 font-light'>About {name}</h1>

            <div className='bg-slate-200 w-full mt-8 drop-shadow-lg shadow-lg shadow-fuchsia-200 h-24 rounded-md flex justify-evenly items-center'>
              <h1 className='text-3xl font-light text-white px-2 py-1 rounded-2xl drop-shadow-xl bg-slate-700'>${price}.00</h1>
              <h2 className=' p-1 w-40 text-sm'>Finacing & Installments available, <Link className='text-blue-700 hover:underline hover:underline-offset-4 text-[16px] ' href='/'>Learn More</Link> </h2>
            </div>

            <div className=' bg-slate-200  drop-shadow-lg shadow-lg shadow-fuchsia-200 w-full h-[25rem] flex justify-center items-center rounded-md mb-10 mt-8'>
              <p className='border text-center text-2xl'>{description}</p>
            </div>

            <div className='w-full h-content gap-8  flex flex-wrap justify-evenly mt-7 mb-64'>
              <div className='border-b rounded-md  w-full h-[16rem] shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <BsCake2Fill size={60} color='white'/>
                <h6 className='text-white text-md font-light'>Birthday</h6>
                <h3 className='text-white text-3xl'>{birthday}</h3>
              </div>
              <div className='border-b rounded-md  w-full h-[16rem] shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <FaWeightScale size={60} color='white'/> 
                <h6 className='text-white text-md font-light'>Weight</h6>
                <h3 className='text-white text-3xl'>{pupWeight}</h3>
              </div>
              <div className='border-b rounded-md w-full h-[16rem] shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
                <GiSittingDog size={60} color='lightBlue'/>
                <h6 className='text-white text-md font-light'>Father&#39;s Weight</h6>
                <h3 className='text-white text-3xl'>{dadsWeight}</h3>
              </div>
              <div className='border-b rounded-md w-full h-[16rem] shadow-md shadow-white flex flex-col justify-center items-center gap-5'>
              <GiSittingDog size={60} color='lightPink'/>
                <h6 className='text-white text-md font-light'>Mother&#39;s Weight</h6>
                <h3 className='text-white text-3xl'>{momsWeight}</h3>
              </div>

            </div>

          </div>

        </div>
        

    </div>
  )
}
