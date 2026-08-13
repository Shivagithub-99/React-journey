import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (name === "" && email === "" && password === "") {
      setMessage("Enter your name, email and password")
    }
    else if (name === "") {
      setMessage("Enter your name")
    }
    else if (email === "") {
      setMessage("Enter your email")
    }
    else if (password === "") {
      setMessage("Enter your password")
    }
    else {
      setMessage("Login Successful!")
    }
  }

  return (
    <>
      <form action="" className='d-flex flex-column gap-1 w-25' onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="email">Enter your Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="pwd">Enter your password:</label>
        <input type="password" id="pwd" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type='submit'>Login</button>
      </form>
      {message === "Login Successful!" ? <p className='text-success'>{message}</p> : <p className='text-danger'>{message}</p>}
    </>
  )
}

export default App
