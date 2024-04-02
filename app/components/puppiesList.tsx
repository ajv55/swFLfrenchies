'use client';
import {usePathname} from 'next/navigation'

import { dogData } from '../data/dogData'
import Card from './card'
import PuppiesCard from './puppiesComponents/puppiesCard';
import Link from 'next/link';
import { BreadcrumbWrapper } from './breadcrumb';
import path from 'path';
import { alex_brush } from '../font/font';

type DogData = {
  name: string;
  imgUrl: string;
  birthday: string;
  price: number;
  gender: string;
  color: string;
  id: number;
  age: string;
  momWeight: string;
  dadWeight: string;
  breed: string;
  description: string;
  weight?: string;
  pupWeight: string;
}

export default function PuppiesList() {

  const pathname = usePathname();
  
  return (
    <div className=' w-full h-content flex flex-col justify-center items-center relative p-2'>
       <BreadcrumbWrapper path={pathname.slice(1,8)}/>
        <h1 className={`${alex_brush.className} text-center w-full text-6xl mt-8 bg-gradient-to-tr from-fuchsia-300 to-purple-400 bg-clip-text text-transparent`}>Our Puppies</h1>
        <div className='lg:w-full lg:flex lg:flex-wrap lg:justify-center gap-8'>
          {dogData.map((dd: DogData, index: number) => {
              return <Link  key={dd.name} href={{
                pathname: `/Puppies/${dd.id}`,
                query: {
                  name: dd.name,
                  birthday: dd.birthday,
                  gender: dd.gender,
                  age: dd.age,
                  description: dd.description,
                  price: dd.price,
                  weight: dd.weight,
                  momsWeight: dd.momWeight,
                  dadsWeight: dd.dadWeight,
                  breed: dd.breed,
                  imgUrl: dd.imgUrl,
                  pupWeight: dd.pupWeight
                }
              }}><PuppiesCard key={dd.name} index={index} name={dd.name} price={dd.price} gender={dd.gender} birthday={dd.birthday} age={dd.age} description={dd.description} /></Link>
            } )}
        </div>
    </div>
  )
}
