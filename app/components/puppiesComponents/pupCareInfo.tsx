import React from 'react'

export default function PupCareInfo() {
  return (
    <div className='w-full h-content flex flex-col gap-16 justify-start mt-32 mb-10 items-center'>
        <h1 className='text-5xl text-center font-bold tracking-wide p-1'>Caring for Your <span className=' bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-300 bg-clip-text text-transparent'>Frenchie Puppy</span></h1>
        <p className='font-light text-xl tracking-wide text-center p-2'><span className='font-bold'>Bringing a Frenchie puppy into your home is an exciting and rewarding experience.</span> Here are some tips to help you care for your <span className='font-bold bg-gradient-to-br from-fuchsia-900 via-fuchsia-600 to-fuchsia-300 bg-clip-text text-transparent'>new furry friend.</span></p>
        <div className=' w-full h-[100%] flex justify-start items-start p-2'>
            <ul className=' w-full list-inside flex flex-col gap-24 list-decimal'>
                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Nutrition:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>Feed your Frenchie puppy a high-quality diet</span> suitable for their age, size, and activity level. <span className='font-bold bg-gradient-to-tr from-red-900 via-red-600 to-red-300 bg-clip-text text-transparent'>Avoid overfeeding to prevent obesity</span>, which can be a common issue in the breed.</p>
                </div>
                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Exercise:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>While Frenchie puppies don&#39;t need excessive exercise</span>, they still require daily walks and playtime to keep them healthy and happy. <span className='font-bold bg-gradient-to-br from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent'>Be mindful of their brachycephalic (short-nosed) anatomy</span>, which can make them susceptible to overheating.</p>
                </div>

                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Training:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>Start training your Frenchie puppy early to establish good behaviors</span> and manners. Positive reinforcement techniques work best with this <span className='font-bold bg-gradient-to-br from-amber-900 via-amber-600 to-amber-300 bg-clip-text text-transparent'>intelligent and eager-to-please breed.</span></p>
                </div>

                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Socialization:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>Expose your Frenchie puppy to a variety of people, animals, and environments</span> from a young age to help them develop into well-adjusted adults. <span className='font-bold bg-gradient-to-tr from-red-900 via-red-600 to-red-300 bg-clip-text text-transparent'>Early socialization is crucial for preventing fearfulness and aggression.</span></p>
                </div>

                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Healthcare:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>Schedule regular veterinary check-ups, vaccinations, and preventive care</span> for your Frenchie puppy. Stay vigilant for signs of common health issues <span className='font-bold bg-gradient-to-tr from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent'>such as allergies, skin fold infections, and breathing difficulties.</span></p>
                </div>

                <div className=' w-full flex flex-col justify-start items-start gap-5'>
                   <li className='text-4xl font-bold '>Grooming:</li>
                   <p className='text-xl font-light tracking-wide text-center'><span className='font-bold'>Frenchie puppies have short coats that require minimal grooming</span>, but regular brushing and occasional baths can help keep their skin and coat healthy. <span className='font-bold bg-gradient-to-tr from-amber-900 via-amber-600 to-amber-300 bg-clip-text text-transparent'>Pay special attention to cleaning their facial wrinkles and ears to prevent infections.</span></p>
                </div>
                
            </ul>
        </div>
        <p className='text-3xl text-center font-light tracking-wide p-2'>By providing your <span className='font-bold bg-gradient-to-br from-pink-900 via-pink-600 to-pink-200 bg-clip-text text-transparent'>Frenchie puppy with love, care, and attention</span>, you&#39;ll ensure they live a <span className='font-bold'>happy</span> and <span className='font-bold'>fulfilling life</span> as part of your family.</p>
    </div>
  )
}
