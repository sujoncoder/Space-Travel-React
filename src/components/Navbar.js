import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    // create a function for toggle mobile nav
    const handleNavOpen = () =>{
        setOpen(!open)
    }

    // create a function for toggle mobile nav
    // const handleNavClose = () =>{
    //     setOpen(!open)
    // }

  return (
    <header className='w-full h-16 z-10 fixed bg-opacity-50 bg-slate-900 px-4 flex justify-between items-center'>

        {/* logo section */}
        <h1 className='text-3xl font-[roboto] text-slate-100 font-bold'>
        Space Travel.
        </h1>

        {/* desktop navigation section */}
        <ul className='hidden md:flex uppercase font-semibold text-slate-100 cursor-pointer space-x-6'>

            <li>Home</li>
            <li>Pricing</li>
            <li>Training</li>
            <li>Contact</li>
        </ul>


        {/* mobile menu section */}
        <div onClick={handleNavOpen} className='text-slate-100 cursor-pointer'>
        {
            (!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose size={25}/>
        }


        {/* absolut mobile navigation */}
        <ul className={(!open) ? 'hidden' : 'absolute top-16 left-0 w-full h-screen bg-slate-900 px-10 uppercase text-center font-medium bg-opacity-50 py-10'} >

            <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Home</li>

            <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Pricing</li>

            <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Training</li>

            <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Contact</li>
        </ul>
        
    
        </div>
    </header>
  )
}

export default Navbar