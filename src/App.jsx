import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Signup from './pages/SignUp'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/Signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <LogIn />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App