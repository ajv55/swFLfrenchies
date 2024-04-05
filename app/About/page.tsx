import Link from "next/link"
import AboutExtra from "../components/aboutComponents/aboutExtra"
import AboutInfo from "../components/aboutComponents/aboutinfo"
import AboutUsHeader from "../components/aboutComponents/aboutusheader"
import Form from "../components/form"
import { alex_brush, dancing_script } from "../font/font"

export default function Page() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
        <AboutUsHeader/>
        <h3 className={`${dancing_script.className} mt-16 mb-14 text-center tracking-wider lg:text-8xl text-7xl bg-gradient-to-tr  from-teal-700 to-slate-400 bg-clip-text text-transparent`}>Our Mission Statement: </h3>
        <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-852586836-e1689866200823.jpg?w=1024")'
      }} className="w-full  p-2 lg:h-[43rem] lg:rounded-xl h-[33rem] flex flex-col justify-center items-center gap-14  bg-slate-200 bg-cover bg-center">
          <p className=' text-white lg:w-[88%] font-light tracking-wider text-center lg:text-4xl text-lg'>At <span className={`${alex_brush.className} text-3xl lg:text-6xl tracking-widest  bg-gradient-to-bl from-purple-400 via-slate-400 to-fuchsia-400 bg-clip-text text-transparent`}>SWFLFrenchies</span>, our mission is far more than just selling Frenchie puppies; it&#39;s about fostering <span className="font-bold bg-gradient-to-br from-rose-900 via-rose-600 to-rose-200 bg-clip-text text-transparent">deep connections and enriching lives</span>. We believe in the power of the human-animal bond and the joy that a furry companion can bring into your home. <span className="font-bold bg-gradient-to-bl from-orange-900 via-orange-500 to-orange-300 bg-clip-text text-transparent">Our mission is multi-faceted</span>, encompassing several key objectives.</p>
        </div>
        <AboutExtra />
        <AboutInfo/>
        <div className="w-full flex justify-center items-center h-[26rem] lg:h-[3rem] p-2 lg:mt-28 mt-20 mb-20">
          <p className="text-center text-2xl lg:w-[85%] lg:mt-28 lg:text-4xl tracking-wide font-light"><span className="font-bold">In essence, our mission is to be more than just a seller</span> of Frenchie puppies; we strive to be a trusted partner and ally on your journey to pet parenthood, committed to enriching the lives of both you and your furry companion. Thank you for considering <span className={`${alex_brush.className} text-5xl  font-bold  bg-gradient-to-bl from-purple-400 to-fuchsia-400 bg-clip-text text-transparent`}>SWFLFrenchies</span> for your Frenchie puppy adoption journey.</p>
        </div>
        <div className="w-full">
          <Form/>
        </div>
        <p className="text-center lg:text-5xl lg:w-[88%] lg:mt-0 mt-32 mb-32 text-3xl p-2 font-light tracking-wide"><span className="font-bold">Be sure to check</span> out our <Link className="underline underline-offset-4 hover:text-6xl hover:text-teal-400" href='/faq'>FAQ</Link> page for answers to common questions and valuable insights into the <span className="font-bold bg-gradient-to-br from-purple-900 via-purple-600 to-purple-300 bg-clip-text text-transparent">world of Frenchie Pitbull puppies!</span></p>
    </div>
  )
}


