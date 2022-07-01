import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Support from './components/Support';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Pricing/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
