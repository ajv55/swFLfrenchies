import { dancing_script } from '@/app/font/font';
import style from '@/app/style.module.css';

export default function AboutInfo() {
  return (
    <div className='bg-slate-700 w-full flex flex-col justify-start items-center h-content relative lg:gap-20 gap-9 mt-12'>
        <div className={style.shape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.fill}></path>
            </svg>
        </div>
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
        <h1 className={`${dancing_script.className} px-1 mt-64 mb-16 text-7xl lg:text-8xl text-center bg-gradient-to-br from-purple-200 to-fuchsia-500 bg-clip-text text-transparent`}>What We Are About!</h1>
        <div className='w-[21rem] lg:w-[52rem] h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center'>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Ethical Breeding Practices</h1>
            <p className='text-lg lg:text-3xl tracking-wide font-extralight text-white'><span className=' bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent '>We adhere to strict ethical breeding standards to ensure the health, temperament, and overall well-being of our Frenchie Pitbull puppies.</span> Our breeding practices prioritize the health and happiness of our dogs above all else.</p>
        </div>
        <div className='w-[21rem] lg:w-[52rem]  h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Quality Over Quantity</h1>
            <p className='text-lg lg:text-3xl  tracking-wide font-extralight text-white'>We believe in quality over quantity. <span className=' bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent'>Each litter is carefully planned and raised in a loving home environment with proper socialization and care.</span> We prioritize the quality of our puppies to ensure they grow into healthy and well-adjusted companions.</p>
        </div>

        <div className='w-[21rem] lg:w-[52rem]  h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Transparency and Trust</h1>
            <p className='text-lg lg:text-3xl  tracking-wide font-extralight text-white'>Transparency is key to building trust with our customers. We provide comprehensive information about our breeding practices, health screenings, and the upbringing of our puppies. <span className='bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent'>We encourage open communication and are always available to address any questions or concerns.</span></p>
        </div>

        <div className='w-[21rem] lg:w-[52rem]  h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Lifetime Support</h1>
            <p className='text-lg lg:text-3xl  tracking-wide font-extralight text-white'>Our commitment to our puppies doesn&#39;t end when they leave our care. <span className='bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-500 bg-clip-text text-transparent'>We offer lifetime support to our customers, providing guidance and assistance at every stage of their puppy&#39;s life.</span>  Whether it&#39;s training tips, health advice, or simply sharing the joy of pet ownership, we&#39;re here for our extended puppy family.</p>
        </div>

        <div className='w-[21rem] lg:w-[52rem]  h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Health Guarantee</h1>
            <p className='text-lg lg:text-3xl  tracking-wide font-extralight text-white'>We stand behind the health of our puppies with a comprehensive health guarantee. <span className='bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-500 bg-clip-text text-transparent'>Prior to adoption, all our puppies undergo thorough veterinary examinations and receive necessary vaccinations and deworming treatments.</span></p>
        </div>

        <div className='w-[21rem] lg:w-[52rem]  h-content rounded-md lg:p-5 px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center mb-64'>
            <h1 className='text-4xl lg:text-5xl tracking-light font-light text-white'>Community and Education</h1>
            <p className='text-lg lg:text-3xl  tracking-wide font-extralight text-white'>We believe in fostering a community of responsible pet owners. <span className='bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-500 bg-clip-text text-transparent'>Through educational resources, training guides, and community events, we aim to empower our customers with the knowledge and tools they need to provide the best possible care for their Frenchie Pitbulls.</span></p>
        </div>
        <span className='bg-gradient-to-tr from-purple-400 via-blue-300 to-fuchsia-500 bg-clip-text text-transparent'></span>

    </div>
  )
}
