
import style from '@/app/style.module.css';



export default function FaqHeader() {

  

  return (
    <div className='bg-gradient-to-tl from-slate-700 via-slate-600 to-slate-500 relative w-full h-[37rem] flex justify-center items-center'>
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
        <h1 className='lg:text-6xl text-4xl text-center font-bold tracking-wide text-white'>Frequently Asked Questions</h1>
    </div>
  )
}
