import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState()

  return (
    <>
      <div>
        <h2>Welcome, Shiva!</h2>
        {isLoggedIn ? <p>You are currently Logged out</p> : <><p>You are logged in.</p><p>Role: Admin</p><p>You have full access.</p></>}
        {isLoggedIn ? <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Login</button> : <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Logout</button>}
      </div>
    </>
  )
}

export default App
