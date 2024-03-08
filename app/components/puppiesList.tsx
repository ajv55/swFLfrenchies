import React from 'react'

import { dogData } from '../data/dogData'

export default function PuppiesList() {
  return (
    <div className='border-4 border-green-600 w-full h-[40rem]'>
        {dogData.map((dd) => {
            return <h1 key={dd.name}>{dd.name}</h1>
        })}
    </div>
  )
}
