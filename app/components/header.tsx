
//font 
import {dancing_script, roboto} from '../font/font'

export default function Header() {
  return (
    <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008292508-1.jpg")'
      }} className=" w-full h-screen bg-center bg-cover bg-no-repeat sm:bg-cover flex flex-col justify-center items-center p-3 gap-10" >
        <h1 className={`${dancing_script.className} text-5xl md:text-8xl text-center text-white`}>Frenchies bring joy to the world</h1>
        <h4 className={`${roboto.className} text-xl md:text-4xl text-center text-white`}>Exotic french bulldogs for sale</h4>
        <p className={`${roboto.className} text-center text-md md:text-2xl text-gray-500 dark:text-gray-400`}>Discover the joy of owning a French Bulldog with our adorable selection of puppies. From their signature bat ears to their playful personalities, our Frenchies are sure to steal your heart.</p>
    </div>
  )
}
