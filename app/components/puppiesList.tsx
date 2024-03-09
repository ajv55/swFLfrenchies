import React from 'react'

import { dogData } from '../data/dogData'
import Card from './card'
import PuppiesCard from './puppiesComponents/puppiesCard';

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
}

export default function PuppiesList() {
  return (
    <div className='border-4 border-green-600 w-full h-content flex flex-col justify-center items-center relative'>
        {dogData.map((dd: DogData) => {
            return <PuppiesCard key={dd.name} name={dd.name} price={dd.price} gender={dd.gender} birthday={dd.birthday} />
          } )}
    </div>
  )
}
