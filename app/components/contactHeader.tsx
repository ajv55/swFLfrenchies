import React from "react";
import { BackgroundGradientAnimation } from "../components/bgMove";
import { alex_brush } from "../font/font";
import styles from '../style.module.css';
import {LampDemo} from '../components/LampDemo';

export function BackgroundGradientAnimationDemo() {
  return (
    <>
        <BackgroundGradientAnimation >
        <div className="absolute z-50 inset-0 flex flex-col gap-8 items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-4xl lg:text-7xl">
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/50">
            Get in Touch About Our French Bulldog Puppies
            </p>
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/40 text-sm">Thank you for considering <span className={`${alex_brush.className} text-4xl mr-1 bg-gradient-to-b text-transparent bg-clip-text from-blue-500/80 to-fuchsia-300/100`} >SWFLfrenchies</span> for your French Bulldog needs. Whether you have questions about our available puppies, want to inquire about our reservation process, or simply want to learn more about Frenchies, we&#39;re here to help!</p>
        </div>
        </BackgroundGradientAnimation>
        <LampDemo />
    </>
  );
}
