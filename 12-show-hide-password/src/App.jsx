import { useState } from 'react'
import './App.css'

function App() {
  const [showPwd, setShowPwd] = useState(false)
  let password = 'shiva@148'

  return (
    <>
      <h2>Password</h2>
      {showPwd ? <p>{password}</p> : <b><p>.........</p></b>}
      {!showPwd ? <button onClick={()=>setShowPwd(!showPwd)}>Show Password</button> : <button onClick={()=>setShowPwd(!showPwd)}>Hide Password</button>}
    </>
  )
}

export default App
