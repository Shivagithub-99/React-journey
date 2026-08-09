import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentStatus from './components/StudentStatus'

function App() {

  return (
    <>
      <StudentStatus name="Shiva" isPlaced={false} marks={78}/>
    </>
  )
}

export default App
