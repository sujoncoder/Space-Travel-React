import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Pricing = () => {
  return (
    <section className='pricing'>
        {/* titttle section */}
        <div className='w-full px-6 h-96 py-6 mx-auto bg-slate-900'>
            <h1 className='text-center font-semibold py-4 text-lg text-gray-400'>PRICING</h1>

            <h1 className='text-center text-3xl md:text-4xl font-bold text-gray-100'>The right price for your research</h1>

            <p className='py-2 text-gray-200 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae ea, facere fugiat explicabo laudantium voluptatem qui animi natus! Necessitatibus.
            </p>
        </div><br />

        {/* card section */}
        <div className='md:flex px-4 md:w-10/12 lg:w-9/12 mx-auto md:space-x-16 mt-[-200px]'>

            <div className='bg-white py-4 my-10 px-8 rounded-lg shadow-xl drop-shadow-xl border border-gray-100 w-10/12 mx-auto hover:scale-105 duration-500'>

                <p className='bg-indigo-400 rounded-xl pl-3 w-[115px]'>STANDARTD</p><br />

                <span className='text-4xl font-bold'>$49</span> <span>/mo</span> <br /> <br />

                <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, modi.</p><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-gray-300' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-gray-300' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <button className='w-full border-gray-600 shadow drop-shadow-lg border-2 rounded-lg h-10 hover:bg-slate-900 text-white bg-slate-700 my-6 duration-500'>Get Start</button>
            </div>
        {/* ----TWO---- */}
         <div className='bg-white py-4 my-10 px-8 rounded-lg shadow-xl drop-shadow-xl border border-gray-100 w-10/12 mx-auto hover:scale-105 duration-500'>

                <p className='bg-indigo-400 rounded-xl pl-4 w-[110px]'>PREMIUM</p><br />

                <span className='text-4xl font-bold'>$100</span> <span>/mo</span> <br /> <br />

                <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, modi.</p><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <AiOutlineCheckCircle className='w-6 inline mr-2 text-green-700' /><span className='text-lg'>Lorem, ipsum dolor.</span><br />

                <button className='w-full border-gray-600 shadow drop-shadow-lg border-2 rounded-lg h-10 hover:bg-slate-900 text-white bg-slate-700 my-6 duration-500'>Get Start</button>
            </div>

            
        </div>
    </section>
  )
}

export default Pricing