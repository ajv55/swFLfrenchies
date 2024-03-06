
import { dogData } from '../data/dogData';
import style from '../style.module.css';
import Card from './card';
import {alex_brush} from '../font/font';

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
}


export default function Curve() {




  return (
    <div  className='relative w-full h-content bg-slate-700 flex justify-center items-start '>
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

        <div className='mt-64 mb-72 flex flex-col justify-start items-center gap-32'>
           <h1 className={`${alex_brush.className} text-white text-center text-6xl  animate-pulse`}>The Puppies</h1>
        {dogData.map((dd: DogData) => {
            return <Card key={dd.name} price={dd.price} gender={dd.gender} age={dd.age} name={dd.name} imgUrl={dd.imgUrl} />
          } )}
        </div>

    </div>
  )
}
