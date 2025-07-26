import React from 'react'
import Layout from './Layout/Layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import StartFrameWork from './Components/StartFrameWork/StartFrameWork'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

export default function App() {
  const router=createBrowserRouter([
{
  path:'',
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<StartFrameWork/>
    },
    {
      path:"About",
      element:<About/>
    },
    {
      path:"Portfolio",
      element:<Portfolio/>
    },
    {
      path:"Contact",
      element:<Contact/>
    }
  ]

}



  ])
  return (
   <>
   
   <RouterProvider router={router} />
   </>
  )
}

