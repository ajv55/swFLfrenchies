"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lamp";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import insta from '../../public/intsaLogo.svg';
import Image from "next/image";
 
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-[2rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
      >
        <div className="flex flex-col justify-center items-center gap-16">
            <h1 className="flex text-3xl justify-center items-center gap-2"><MdOutlineMailOutline size={45} color="white" />email@email.com</h1>
            <h1 className="flex text-3xl justify-center items-center gap-2"><IoIosPhonePortrait size={45} color='white'/>phone number</h1>
            <div className="w-full flex justify-center">
              <Image src={insta} alt='intsa' width={50} height={50}></Image>
            </div>
            
        </div>
      </motion.h1>
    </LampContainer>
  );
}