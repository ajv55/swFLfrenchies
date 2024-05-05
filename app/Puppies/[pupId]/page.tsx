'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import style from '@/app/style.module.css';
import {motion} from 'framer-motion'

//components 
import PupDetail from '@/app/components/puppiesComponents/pupDetail';
import { TextRevealCardPreview } from '@/app/components/textText';
import Parents from '@/app/components/puppiesComponents/parents';
import Included from '@/app/components/puppiesComponents/included';
import Form from '@/app/components/form';
import Link from 'next/link';


export default function Page() {
 
  const serachParams = useSearchParams();

  const name = serachParams.get('name');
  const birthday = serachParams.get('birthday');
  const gender = serachParams.get('gender');
  const age = serachParams.get('age');
  const price = serachParams.get('price');
  const mom = serachParams.get('momsWeight');
  const dad = serachParams.get('dadsWeight');
  const description = serachParams.get('description');
  const imgUrl = serachParams.get('imgUrl');
  const breed = serachParams.get('breed');
  const pupWeight = serachParams.get('pupWeight');
  const pupGIF = serachParams.get('pupGIF')
  console.log('gif url: ', pupGIF)


  return (
    <>
      <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/turbo.GIF")`}} className=' bg-slate-600 w-full h-[53rem] relative flex  justify-center items-center gap-8'>
        <div className={style.custom}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
              </svg>
          </div>
          
        <motion.h1 initial={{scale: 0.1, opacity: 0.1, y: '700%'}} animate={{scale: 0.7, y: '30%'}} transition={{ease: 'easeInOut', duration: 1}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-center tracking-wider font-bold lg:text-8xl text-5xl mb-16 bg-gradient-to-r from-fuchsia-300 to-purple-400 bg-clip-text text-transparent'> Meet {name}</motion.h1>
      </div>
      <PupDetail breed={breed as string} name={name as string} pupWeight={pupWeight as string} age={age as string} description={description as string} momsWeight={mom as string} dadsWeight={dad as string} birthday={birthday as string} gender={gender as string}  price={price} imgUrl={imgUrl as string}  />
      <Parents/>
      <Included name={name as string} gender={gender as string} />
      <div className='flex justify-center items-center w-full'>
        <p className=' mb-32 lg:mb-20 mt-32 lg:text-5xl text-3xl text-center  tracking-wide w-full p-3 lg:p-0 lg:w-[70%]'><span className='font-bold bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-200 bg-clip-text text-transparent'>If you have any additional questions or concerns</span> not addressed here, please don&#39;t hesitate to <Link href='/Contact' className='underline underline-offset-4 hover:text-4xl hover:text-purple-400'>contact us</Link>. We&#39;re here to assist you in <span className='font-bold'>finding the perfect Frenchie Pitbull puppy to join your family!</span></p>
      </div>
      <Form />
      <p className="text-center mt-32 mb-32  text-3xl p-2 font-light tracking-wide"><span className="font-bold">Be sure to check</span> out our <Link className="underline underline-offset-4" href='/faq'>FAQ</Link> page for answers to common questions and valuable insights into the <span className="font-bold bg-gradient-to-br from-purple-900 via-purple-600 to-purple-300 bg-clip-text text-transparent">world of Frenchie Pitbull puppies!</span></p>
    </>
  )
}
