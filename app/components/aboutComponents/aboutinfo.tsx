import { dancing_script } from '@/app/font/font';
import style from '@/app/style.module.css';

export default function AboutInfo() {
  return (
    <div className='bg-slate-700 w-full flex flex-col justify-start items-center h-content relative gap-9'>
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.f}></path>
            </svg>
        </div>
        <h1 className={`${dancing_script.className} px-1 mt-20 mb-16 text-7xl text-center bg-gradient-to-br from-purple-200 to-fuchsia-500 bg-clip-text text-transparent`}>What We Are About!</h1>
        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center'>
            <h1 className='text-4xl text-white'>Ethical Breeding Practices</h1>
            <p className='text-lg text-white'>We adhere to strict ethical breeding standards to ensure the health, temperament, and overall well-being of our Frenchie Pitbull puppies. Our breeding practices prioritize the health and happiness of our dogs above all else.</p>
        </div>
        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl text-white'>Quality Over Quantity</h1>
            <p className='text-lg text-white'>We believe in quality over quantity. Each litter is carefully planned and raised in a loving home environment with proper socialization and care. We prioritize the quality of our puppies to ensure they grow into healthy and well-adjusted companions.</p>
        </div>

        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl text-white'>Transparency and Trust</h1>
            <p className='text-lg text-white'>Transparency is key to building trust with our customers. We provide comprehensive information about our breeding practices, health screenings, and the upbringing of our puppies. We encourage open communication and are always available to address any questions or concerns.</p>
        </div>

        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl text-white'>Lifetime Support</h1>
            <p className='text-lg text-white'>Our commitment to our puppies doesn&#39;t end when they leave our care. We offer lifetime support to our customers, providing guidance and assistance at every stage of their puppy&#39;s life. Whether it&#39;s training tips, health advice, or simply sharing the joy of pet ownership, we&#39;re here for our extended puppy family.</p>
        </div>

        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center '>
            <h1 className='text-4xl text-white'>Health Guarantee</h1>
            <p className='text-lg text-white'>We stand behind the health of our puppies with a comprehensive health guarantee. Prior to adoption, all our puppies undergo thorough veterinary examinations and receive necessary vaccinations and deworming treatments.</p>
        </div>

        <div className='w-[21rem] h-content rounded-md px-2 py-3  flex flex-col justify-center items-center gap-7 shadow-lg shadow-fuchsia-100 text-center mb-64'>
            <h1 className='text-4xl text-white'>Community and Education</h1>
            <p className='text-lg text-white'>We believe in fostering a community of responsible pet owners. Through educational resources, training guides, and community events, we aim to empower our customers with the knowledge and tools they need to provide the best possible care for their Frenchie Pitbulls.</p>
        </div>

    </div>
  )
}
