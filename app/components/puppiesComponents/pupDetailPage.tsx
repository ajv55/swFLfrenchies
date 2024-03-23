'use client';
import {useSearchParams} from 'next/navigation'

export default function PupDetails() {

    const searchParams = useSearchParams();

    const name = searchParams.get('name')

  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}
