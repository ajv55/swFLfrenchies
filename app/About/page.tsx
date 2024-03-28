import AboutInfo from "../components/aboutComponents/aboutinfo"
import AboutUsHeader from "../components/aboutComponents/aboutusheader"
import { alex_brush, dancing_script } from "../font/font"

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
        <AboutUsHeader/>
        <h3 className={`${dancing_script.className} mt-16 mb-14 text-center text-7xl bg-gradient-to-tr  from-teal-700 to-slate-400 bg-clip-text text-transparent`}>Our Mission Statement: </h3>
        <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-852586836-e1689866200823.jpg?w=1024")'
      }} className="w-full p-2  h-[33rem] flex flex-col justify-center items-center gap-14  bg-slate-200 bg-cover bg-center">
          <p className="text-center text-white text-xl">At <span className={`${alex_brush.className}  text-4xl bg-gradient-to-br from-fuchsia-400 via-pink-400 to-purple-500 bg-clip-text text-transparent`}>SWFLFrenchies</span>, our mission is to connect loving families with healthy and happy Frenchie Pitbull puppies. We strive to provide a trusted platform where prospective puppy owners can find their perfect furry companion while ensuring the well-being and ethical treatment of our dogs.</p>
        </div>
        <AboutInfo/>
    </div>
  )
}


