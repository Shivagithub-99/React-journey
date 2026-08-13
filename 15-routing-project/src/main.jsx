import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'

let routes = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/home",
    element: <Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"profile",
    element:<Profile/>
  },
  {
    path:"signup",
    element:<Signup/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
