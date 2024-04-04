import style from '../../style.module.css';
import { Meteors } from '../3dcard';

type IncludedProps = {
    name: string,
    gender: string
}

export default function Included({name,gender}: IncludedProps) {

    const genderRevel = gender === "Male" ? 'his' : 'her';

  return (
    <div className=' bg-slate-700 w-full h-content flex flex-col justify-center items-center gap-16 relative'>
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

        <h1 className='text-center font-bold tracking-wide lg:text-6xl text-4xl text-white mt-64'>What&#39;s Included ? </h1>
        <p className='text-center text-white lg:text-2xl lg:w-[53%] tracking-wide text-lg px-3'>We want to ensure that your new furry friend comes home with everything they need to thrive. <span className='font-bold'>Here&#39;s what&#39;s included with your French Bulldog puppy.</span></p>
        <div className='flex flex-col lg:flex-row lg:flex-wrap mb-64 justify-center items-center  w-full gap-16'>
            <div className=' bg-orange-100 rounded-lg lg:w-[45%]  w-[21rem] h-[24rem] px-2 py-3 relative flex flex-col justify-center items-center gap-7'>
                <h1 className='text-slate-700 text-center font-bold tracking-wide lg:text-6xl text-5xl'>Health Certificate</h1>
                <p className='text-slate-700 text-center font-light tracking-wider lg:text-lg text-sm px-2'><span className='font-bold'>Each puppy comes with a health certificate issued by a licensed veterinarian</span>, ensuring that they are in good health and free from genetic defects or known diseases. <span className='font-bold'>The health certificate provides peace of mind</span> to the new owner, knowing that their puppy has been thoroughly checked and is ready to join their family.</p>
                <Meteors className='lg:hidden' />
            </div>
            <div className=' bg-orange-100 relative rounded-lg lg:w-[45%] w-[21rem] h-[24rem] px-2 py-3 flex flex-col justify-center items-center gap-7'>
                <h1 className='text-slate-700 text-center font-bold tracking-wide lg:text-6xl text-5xl'>Vaccinations</h1>
                <p className='text-slate-700 text-center font-light tracking-wider lg:text-lg text-sm px-2'><span className='font-bold'>{name} has received all the necessary vaccinations to protect {genderRevel} from common diseases</span>, including distemper, parvovirus, and rabies. The vaccinations are up-to-date, ensuring that {name} is healthy and protected. <span className='font-bold'>New owners will receive the vaccination records</span>, and we recommend following up with their veterinarian to maintain the vaccination schedule.</p>
                <Meteors className='lg:hidden' />
            </div>
            <div className=' relative bg-orange-100 rounded-lg lg:w-[45%] w-[21rem] h-[24rem] px-2 py-3 flex flex-col justify-center items-center gap-7'>
                <h1 className='text-slate-700 text-center font-bold tracking-wide lg:text-6xl text-5xl'>Pedigree</h1>
                <p className='text-slate-700 text-center font-light tracking-wider lg:text-lg text-sm px-2'><span className='font-bold'>{name} comes with a pedigree certificate, which documents {genderRevel} lineage and bloodline.</span> The pedigree provides information about {name}&#39;s ancestors, including any titles or awards they may have won. <span className='font-bold'>It is a testament to {name}&#39; quality and heritage, making {genderRevel} an excellent choice</span> for those interested in breeding or showing French Bulldogs.</p>
                <Meteors className='lg:hidden' />
            </div>
            <div className=' relative bg-orange-100 rounded-lg lg:w-[45%] w-[21rem] h-[24rem] px-2 py-3 flex flex-col justify-center items-center gap-7 '>
                <h1 className='text-slate-700 text-center font-bold tracking-wide lg:text-6xl text-5xl'>Starter Kit</h1>
                <p className='text-slate-700 text-center font-light tracking-wider lg:text-lg text-sm px-2'><span className='font-bold'>To help {name} transition to {genderRevel} new home, we provide a starter kit</span> that includes essential items such as a collar, leash, food bowl, toys, and a small bag of high-quality puppy food. <span className='font-bold'>The starter kit is designed to make {name} feel welcome and comfortable</span>, allowing {genderRevel} to settle in with ease. It also gives the new owner everything they need to care for {name} from day one.</p>
                <Meteors className='lg:hidden' />
            </div>
            <div className=' relative bg-orange-100 rounded-lg lg:w-[45%] w-[21rem] h-[24rem] px-2 py-3 flex flex-col justify-center items-center gap-7 lg:mb-0 '>
                <h1 className='text-slate-700 text-center font-bold tracking-wide lg:text-6xl text-5xl'>Support and Guidance</h1>
                <p className='text-slate-700 text-center font-light tracking-wider lg:text-lg text-sm px-2'><span className='font-bold'>We are committed to providing ongoing support and guidance to the new owners</span> of our French Bulldog puppies. We are available to answer any questions and offer advice on training, healthcare, and general care. <span className='font-bold'>We want to ensure that {name} and {genderRevel} new family have a happy and harmonious life together.</span> The journey of pet ownership is one we are happy to share, and we are dedicated to being a source of assistance and encouragement.</p>
                <Meteors className='lg:hidden' />
            </div>
        </div>
    </div>
  )
}
