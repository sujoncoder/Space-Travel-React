import React from 'react'
import bgVideo from '../assets/space.mp4'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <section name='home' className='w-full h-screen'>
      
        {/* video section */}
        <video className='w-full h-screen object-cover absolute' src={bgVideo} autoPlay muted loop/>

      {/* tittle section */}
        <div className='absolute w-full h-full flex flex-col justify-center items-center space-y-4'>

          <h1 className='text-5xl md:text-6xl text-white font-bold font-[poppins]'>Space Travel</h1>


          <Typed
          className='text-2xl uppercase text-slate-100 font-thin text-center'
                    strings={['World first civilian space travel']}
                    typeSpeed={50}
                    backSpeed={60}
                    loop 
                />

          <div className='space-x-4'>
            <button className='border text-white py-1 px-4 rounded-full bg-green-600 bg-opacity-50 font-medium uppercase hover:scale-105 duration-300 shadow shadow-pink-300'>Training</button>
            
            <button className='border text-white py-1 px-4 rounded-full bg-blue-600 bg-opacity-50 font-medium uppercase hover:scale-105 duration-300 shadow shadow-pink-300'>Luance</button>
          </div>
        </div>
    </section>
  )
}

export default Hero