import AboutExtra from "../components/aboutComponents/aboutExtra"
import AboutInfo from "../components/aboutComponents/aboutinfo"
import AboutUsHeader from "../components/aboutComponents/aboutusheader"
import Form from "../components/form"
import { alex_brush, dancing_script } from "../font/font"

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
        <AboutUsHeader/>
        <h3 className={`${dancing_script.className} mt-16 mb-14 text-center text-7xl bg-gradient-to-tr  from-teal-700 to-slate-400 bg-clip-text text-transparent`}>Our Mission Statement: </h3>
        <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-852586836-e1689866200823.jpg?w=1024")'
      }} className="w-full p-2  h-[33rem] flex flex-col justify-center items-center gap-14  bg-slate-200 bg-cover bg-center">
          <p className=' text-white text-center text-lg'>At <span className={`${alex_brush.className} text-3xl  bg-gradient-to-bl from-purple-400 via-slate-400 to-fuchsia-400 bg-clip-text text-transparent`}>SWFLFrenchies</span>, our mission is far more than just selling Frenchie puppies; it&#39;s about fostering deep connections and enriching lives. We believe in the power of the human-animal bond and the joy that a furry companion can bring into your home. Our mission is multi-faceted, encompassing several key objectives:</p>
        </div>
        <AboutExtra />
        <AboutInfo/>
        <div className="w-full h-[26rem] p-2 mt-20 mb-20">
          <p className="text-center text-2xl tracking-wide font-light">In essence, our mission is to be more than just a seller of Frenchie puppies; we strive to be a trusted partner and ally on your journey to pet parenthood, committed to enriching the lives of both you and your furry companion. Thank you for considering <span className={`${alex_brush.className} text-5xl  font-bold  bg-gradient-to-bl from-purple-400 to-fuchsia-400 bg-clip-text text-transparent`}>SWFLFrenchies</span> for your Frenchie puppy adoption journey.</p>
        </div>
        <Form/>
    </div>
  )
}


