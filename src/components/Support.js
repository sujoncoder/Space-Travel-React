import React from 'react'
import { BsLaptop } from 'react-icons/bs';
import { IoIosAlert } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';


const Support = () => {
  return (
    <section name='support' className='w-full bg-slate-100'>
        {/* tittle section */}
        <div className='w-9/12 mx-auto'>
            <h1 className='text-center py-4 text-3xl font-bold text-gray-500 uppercase'>Support</h1>

            <p className='text-center text-xl text-gray-700'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, amet.
            </p>
        </div><br />

        {/* card section */}
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <BsLaptop size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>Technical</h1>

                <p className='text-slate-300 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Reiciendis optio perspiciatis ut corrupti molestiae eligendi sit perferendis quos!</p>
            </div>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <IoIosAlert size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>Salse</h1>

                <p className='text-slate-300 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Reiciendis optio perspiciatis ut corrupti molestiae eligendi sit perferendis quos!</p>
            </div>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <AiOutlineUser size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>General</h1>

                <p className='text-slate-300 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Reiciendis optio perspiciatis ut corrupti molestiae eligendi sit perferendis quos!</p>
            </div>
        </div>

    </section> 
  )
}

export default Support