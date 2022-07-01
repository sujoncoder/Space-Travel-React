import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

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
    <header className='w-full h-14 z-10 fixed bg-opacity-50 bg-slate-900 px-4 flex justify-between items-center'>

        {/* logo section */}
        <h1 className='text-3xl font-[roboto] text-slate-100 font-bold'>
        Space Travel.
        </h1>

        {/* desktop navigation section */}
        <ul className='hidden md:flex uppercase font-semibold text-slate-100 cursor-pointer space-x-6'>

            <li>
            <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
            </li>

            <li>
            <Link to="about" spy={true} smooth={true} offset={-0} duration={500}>About</Link>
            </li>

            <li>
            <Link to="pricing" spy={true} smooth={true} offset={-0} duration={500}>Pricing</Link>
            </li>

            <li>
            <Link to="support" spy={true} smooth={true} offset={-0} duration={500}>Support</Link>
            </li>
        </ul>


        {/* mobile menu section */}
        <div onClick={handleNavOpen} className='md:hidden text-slate-100 cursor-pointer'>
        {
            (!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose size={25}/>
        }


        {/* absolut mobile navigation */}
        <ul className={(!open) ? 'hidden' : 'absolute top-14 left-0 w-full h-screen bg-slate-900 px-10 uppercase text-center font-medium bg-opacity-50 py-10'} >

        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
        <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Home</li>
        </Link>

        <Link to="about" spy={true} smooth={true} offset={-0} duration={500}>
        <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>About</li>
        </Link>

        <Link to="pricing" spy={true} smooth={true} offset={-50} duration={500}>
        <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Pricing</li>
        </Link>

        <Link to="support" spy={true} smooth={true} offset={-50} duration={500}>
        <li className='border-b py-2 hover:bg-blue-500/40 rounded duration-300'>Support</li>
        </Link>
        </ul>
        
    
        </div>
    </header>
  )
}

export default Navbar