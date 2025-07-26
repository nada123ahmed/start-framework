import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "../Components/Footer/Footer"
export default function Layout() {
  return (
    <>
    <Navbar/>
 <div  style={{ minHeight: 'calc(100vh - 60px)', backgroundColor:"#1abc9c" }}>
     <Outlet/>
 </div>
 <Footer/>
</>
  )
}
