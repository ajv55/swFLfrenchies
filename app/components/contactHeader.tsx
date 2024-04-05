import React from "react";
import { BackgroundGradientAnimation } from "../components/bgMove";
import { alex_brush } from "../font/font";
import styles from '../style.module.css';
import {LampDemo} from '../components/LampDemo';
import Link from "next/link";

export function BackgroundGradientAnimationDemo() {
  return (
    <>
        <BackgroundGradientAnimation >
        <div className="absolute z-50 inset-0 flex flex-col gap-8 items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-4xl lg:text-7xl">
            <p className=" bg-clip-text text-transparent lg:text-7xl drop-shadow-2xl bg-gradient-to-b from-purple-200 to-slate-100">
            Get in Touch About Our French Bulldog Puppies
            </p>
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-purple-200 to-slate-200 lg:text-lg lg:w-[50%] text-sm">Thank you for considering <span className={`${alex_brush.className} text-4xl lg:text-5xl mr-1 bg-gradient-to-b text-transparent bg-clip-text from-blue-500/80 via-pink-200 to-fuchsia-300/100`} >SWFLfrenchies</span> for your French Bulldog needs. Whether you have questions about our available puppies, want to inquire about our reservation process, or simply want to learn more about Frenchies, we&#39;re here to help!</p>
        </div>
        </BackgroundGradientAnimation>
        <LampDemo />
        <div className=" mt-24 mb-24  w-full flex justify-center items-center">
          <p className="text-4xl lg:text-5xl font-light tracking-wider text-center w-[80%]"><span className="font-bold bg-gradient-to-tr from-cyan-900 via-cyan-500 to-cyan-200 bg-clip-text text-transparent">Before reaching out</span>, you might find answers to your questions in our FAQ section. Check it out our <Link className="underline underline-offset-4" href='/faq'>FAQ page</Link>.</p>
        </div>
    </>
  );
}
