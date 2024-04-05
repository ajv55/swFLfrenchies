
import Curve from "./components/curve";
import Header from "./components/header";
import Info from "./components/info";
import Why from "./components/why";
import Form from "./components/form";
import Ready from "./components/ready";
import TimedModal from "./components/timedModal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">  
      <Header />
      <TimedModal />
      <Why />
      <Curve />
      <Info />
      <Ready />
      <p className=' mb-32 lg:mb-0 lg:text-5xl text-3xl text-center tracking-wide w-full p-3 lg:p-0 lg:w-[80%]'><span className='font-bold bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-200 bg-clip-text text-transparent'>If you have any additional questions or concerns</span>, please don&#39;t hesitate to <Link href='/Contact' className='underline font-semibold underline-offset-4'>contact us</Link>. We&#39;re here to assist you in <span className='font-bold'>finding the perfect Frenchie Pitbull puppy to join your family!</span></p>
      <div className="w-full">
       <Form />
      </div>
      <p className="text-center lg:mt-0 mt-32 mb-32 lg:text-5xl lg:w-[88%] text-3xl p-2 font-light tracking-wide"><span className="font-bold">Be sure to check</span> out our <Link className="underline font-semibold underline-offset-4" href='/faq'>FAQ</Link> page for answers to common questions and valuable insights into the <span className="font-bold bg-gradient-to-br from-purple-900 via-purple-600 to-purple-300 bg-clip-text text-transparent">world of Frenchie Pitbull puppies!</span></p>
      
    </div>
  );
}
