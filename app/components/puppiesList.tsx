import React from 'react'

import { dogData } from '../data/dogData'
import Card from './card'
import PuppiesCard from './puppiesComponents/puppiesCard';
import Link from 'next/link';

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
}

export default function PuppiesList() {
  return (
    <div className=' w-full h-content flex flex-col justify-center items-center relative'>
        {dogData.map((dd: DogData) => {
            return <Link  key={dd.name} href={{
              pathname: `/Puppies/${dd.id}`,
              query: {
                name: dd.name,
                birthday: dd.birthday,
                gender: dd.gender,
                age: dd.age,
                description: dd.description
              }
            }}><PuppiesCard key={dd.name} name={dd.name} price={dd.price} gender={dd.gender} birthday={dd.birthday} age={dd.age} description={dd.description} /></Link>
          } )}
    </div>
  )
}
