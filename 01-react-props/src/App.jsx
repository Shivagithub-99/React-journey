import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div style={{display: "flex", flexDirection:"column", gap:"1rem"}}>
        <Navbar />
        <Hero name="Shiva Busarapu" role="Student"/>
        <About skill1="HTML" skill2="CSS" skill3="JavaScript" skill4="SQL" skill5="React-Basics"/>
        <Footer />
      </div>
    </>
  )
}

export default App
