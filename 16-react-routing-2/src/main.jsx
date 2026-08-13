import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Profiles from './Profiles.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Layout from './Layout.jsx'
import ErrorPage from './ErrorPage.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {path: "", element: <Home/>},
      {path: "/about", element: <About/>},
      {path: "/profiles", element: <Profiles/>},
      {path: "/login", element: <Login/>},
      {path: "/Signup", element: <Signup/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
)
