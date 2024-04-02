import {roboto, alex_brush, roboto_slab, stardos_stencil} from '../font/font';
import { Meteors } from './3dcard';

// font-bold bg-gradient-to-tr from-red-400 via-orange-200 to-pink-400 bg-clip-text text-transparent

export default function Info() {
  return (
    <div className=" w-full h-content mt-28 mb-28 flex flex-col  justify-center items-center gap-10">
        <p className={`${roboto_slab.className} text-center border  font-light text-xl lg:text-4xl lg:w-[75%]  p-2 lg:mb-32`}>Welcoming a <span className={`${alex_brush.className} text-4xl  lg:text-7xl tracking-wider bg-gradient-to-tr from-purple-600 via-pink-300 to-fuchsia-700 bg-clip-text text-transparent `}>French Bulldog Puppy</span> into your home is an exciting and rewarding experience. These adorable companions have unique characteristics and needs that set them apart from other breeds. <span className='font-bold'>Here&#39;s what you need to know to understand and care for your frenchie puppy</span></p>
        <div className=' w-full flex lg:flex-row lg:flex-wrap h-content flex-col justify-center items-center gap-10 border-2 '>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-400 via-slate-700 to-slate-900 w-[22rem] lg:w-[32rem] h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>1</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Playful Personality</h1>
                <p className='text-center lg:text-xl lg:px-2 text-sm text-white'>French Bulldog puppies are known for their playful and mischievous nature. They love to romp around, chase toys, and engage in interactive games with their human companions. <span className='font-bold bg-gradient-to-tr from-red-400 via-orange-200 to-pink-400 bg-clip-text text-transparent'>Be prepared for plenty of laughter and fun-filled moments as you bond with your Frenchie puppy.</span></p>
                <Meteors className='lg:hidden' />
            </div>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-400 w-[22rem] lg:w-[42rem] h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>2</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Affectionate Disposition</h1>
                <p className='text-center lg:text-xl lg:px-2 text-sm text-white'><span className='font-bold bg-gradient-to-tr from-red-400 via-orange-200 to-pink-400 bg-clip-text text-transparent'>Despite their playful antics, French Bulldog puppies are incredibly affectionate and thrive on human companionship.</span> They form strong bonds with their families and enjoy cuddling up on the couch or snuggling in bed. Your Frenchie puppy will eagerly shower you with love and affection every chance they get.</p>
                <Meteors className='lg:hidden'/>
            </div>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-400 w-[22rem] lg:w-[42rem]  h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>3</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Training and Socialization</h1>
                <p className='text-center lg:text-xl lg:px-2 text-sm text-white'>Early training and socialization are crucial for French Bulldog puppies to grow into well-behaved and well-adjusted adult dogs. Start basic obedience training as soon as you bring your puppy home, <span className='font-bold bg-gradient-to-tr from-red-400 via-orange-200 to-pink-400 bg-clip-text text-transparent'>using positive reinforcement techniques such as treats and praise.</span> Expose your Frenchie puppy to various people, animals, and environments to help them develop confidence and good manners.</p>
                <Meteors className='lg:hidden'/>
            </div>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-400 via-slate-700 to-slate-900 w-[22rem] lg:w-[32rem] h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>4</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Health and Wellness</h1>
                <p className='text-center text-sm text-white'>French Bulldog puppies require regular veterinary care to ensure they stay healthy and happy. Schedule routine check-ups, vaccinations, and preventive treatments as recommended by your veterinarian. Keep an eye out for any signs of health issues, such as breathing difficulties, skin problems, or joint concerns, and address them promptly with professional guidance.</p>
                <Meteors className='lg:hidden'/>
            </div>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-400 via-slate-700 to-slate-900 w-[22rem] lg:w-[32rem] h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>5</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Brachycephalic Considerations</h1>
                <p className='text-center text-sm text-white'>French Bulldogs are a brachycephalic breed, meaning they have flat faces and shortened airways. This anatomical feature can predispose them to respiratory issues, especially in hot or humid weather. Take precautions to keep your Frenchie puppy cool and comfortable, avoid strenuous exercise in extreme temperatures, and provide plenty of fresh water and shade.</p>
                <Meteors className='lg:hidden'/>
            </div>

            <div className={`${roboto.className} bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-400 w-[22rem] lg:w-[42rem]  h-[31rem] rounded-lg relative flex justify-center items-center flex-col gap-14 p-2`}>
                <h2 className={`${stardos_stencil.className} text-center text-[25rem] lg:text-[38rem] text-white absolute top-auto lg:-top-40 left-auto opacity-25`}>6</h2>
                <h1 className='text-center font-bold tracking-wider text-4xl lg:text-5xl bg-gradient-to-tr from-pink-700 via-orange-100 to-red-600 bg-clip-text text-transparent'>Nutritional Needs</h1>
                <p className='text-center text-sm text-white'>Provide your Frenchie puppy with a balanced and nutritious diet formulated specifically for their age, size, and activity level. Choose high-quality dog food that meets their nutritional requirements and avoid overfeeding to prevent obesity, which can exacerbate health issues. Consult with your veterinarian for personalized feeding recommendations.</p>
                <Meteors className='lg:hidden' />
            </div>
        </div>
    </div>
  )
}
