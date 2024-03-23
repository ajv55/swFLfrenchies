import { alex_brush } from "@/app/font/font";


export default function Parents() {
  return (
    <div className='border border-blue-500 w-full h-content flex flex-col justify-center items-center gap-10'>
        <h1 className={`${alex_brush.className} text-6xl bg-gradient-to-br from-purple-500 to-fuchsia-300 bg-clip-text text-transparent p-2 mt-5`}>My Parents</h1>
        <div className='border border-green-300 w-full h-[24rem]'>
            <h1>My Mom</h1>
        </div>
        <div className='border border-red-300 w-full h-[24rem]'>
            <h1>My Dad</h1>
        </div>
    </div>
  )
}
