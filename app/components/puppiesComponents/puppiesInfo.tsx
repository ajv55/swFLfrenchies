'use client'
import React from 'react';
import style from '../../style.module.css'
import {motion, useScroll, useTransform} from 'framer-motion';

import { alex_brush } from '@/app/font/font';

import { TextGenerateEffect } from "../text-generate";
import InfoCard from './infoCard';



export default function PuppiesInfo() {


    const words = 'Reach out to us via phone or email to express your interest in a particular puppy. Our friendly team will be delighted to assist you with any questions you may have and provide additional information about the puppy of your choice.';
    const selectionWords = `Let us know which puppy has captured your heart from our gallery. Whether you're drawn to Puppy's 3 sweet demeanor, Puppy's 1 playful personality, Puppy's 2 gentle soul, Puppy's 8 charming antics, or Puppy's 5 loving nature, we'll help you find the perfect match for your lifestyle and preferences.`;
    const reservationWords = `Once you've chosen your ideal Frenchie puppy, we'll guide you through the reservation process. This typically involves completing a reservation form and making a deposit to secure your puppy. Our team will provide you with all the necessary details and instructions.`;
    const paymentWords = `We offer flexible payment options to accommodate your needs. Whether you prefer to pay in full or set up a payment plan, we'll work with you to make the process convenient and hassle-free.`;
    const confirmWords = `After completing the reservation process, you'll receive confirmation of your reservation along with any necessary documentation, such as a sales contract or health guarantee. This ensures transparency and peace of mind for both parties.`;
    const prepareWords = `As your puppy grows and becomes ready to leave for their new home, we'll coordinate a pickup or delivery date that works for you. We'll provide guidance on preparing for your puppy's arrival and answer any last-minute questions you may have.`;
    const bringingWords = `On the scheduled pickup or delivery date, you'll finally get to meet your new furry family member! We'll provide you with all the necessary paperwork, including vaccination records and health certificates, and offer guidance on caring for your puppy during the transition period.`;
    const continueWords = `Our commitment to you doesn't end with the puppy handover. We're here to offer continued support and guidance as you embark on this exciting journey with your new Frenchie companion. Whether you have questions about training, nutrition, or healthcare, we're just a phone call or email away.`

  return (
    <div  className='relative w-full h-content bg-slate-700 flex flex-col justify-center items-start mt-32 mb-32 overflow-hidden'>
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
        <motion.h1 className={`${alex_brush.className} text-center text-6xl bg-gradient-to-r to-fuchsia-400 from-red-300 text-transparent bg-clip-text mt-56 mb-48`}>Reserve Your Perfect Frenchie Puppy Today!</motion.h1> 
        <div className='mb-44'>
            <InfoCard title='Contact Us' words={words} />
            <InfoCard title='Puppy Selection' words={selectionWords} />
            <InfoCard title='Reservation Process' words={reservationWords} />
            <InfoCard title='Payment Options' words={paymentWords} />
            <InfoCard title='Confirmation and Documentation' words={confirmWords} />
            <InfoCard title='Preparation for Pickup or Delivery' words={prepareWords} />
            <InfoCard title='Bringing Your Puppy Home' words={bringingWords} />
            <InfoCard title='Continued Support' words={continueWords} />
        </div>

    </div>
  )
}
