import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name:</label><br />
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        {name === "" ? <p>Hello, Guest</p> : <p>Hello, {name}</p>}
      </form>
    </>
  )
}

export default App
