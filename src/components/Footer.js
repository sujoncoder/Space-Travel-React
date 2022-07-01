import React from 'react'
import {AiTwotonePhone,AiOutlineMail} from 'react-icons/ai'
import {FaSearchLocation} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='w-full bg-slate-900 bg-opacity-50'>

        <main className='w-10/12 mx-auto flex flex-col justify-between items-center'>

        {/* footer left section  */}
        <div>
            {/* search icon section */}
            <div>
            <FaSearchLocation/>
            <span>123 Ace St.</span>
            <span>Houston, tx</span>
            </div>
            
            {/* phone icon section */}
            <div>
                <AiTwotonePhone/>
                <span>01999-986919</span>
            </div>


            {/* email icpon section */}
            <div>
                <AiOutlineMail/>
                <span>sujonsheikh.in@gmail.com</span>
            </div>
        </div>

        {/* footer right section */}
        <div>
            <h1>About the company</h1>

            <p>Se buscando con brooklyn por que mi veces quedo, ligeros llenando buscando de embozo. Con árboles vuelve vacía de. Es.</p>
        </div>

        </main>

    </footer>
  )
}

export default Footer