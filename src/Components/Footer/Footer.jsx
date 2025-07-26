import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
   <div className='back-custom  p-5 '>
    <div className="row ">
        <div className='text-white col-md-4 col-sm-12 text-center mb-5'>
      <h3>Location</h3>
<p>2215 john Daniel Drive</p>
<p>Clark,MO 65243</p>
    </div>
   
    <div className='text-white col-md-4 col-sm-12 text-center mb-5'>
  <h3>AROUND THE WEB </h3>
  <div className='d-flex justify-content-center align-items-center anchor'>
   
    <a href="#" className="icon-wrapper mx-2">
      <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="icon-wrapper mx-2">
      <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="icon-wrapper mx-2">
      <i className="bi bi-linkedin"></i>
    </a>
    <a href="#" className="icon-wrapper mx-2">
      <i className="bi bi-globe"></i>
    </a>
  </div>
</div>
    <div className='text-white col-md-4 col-sm-12 text-center mb-5'>
<h3>ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
    </div>
  
   </div>
  )
}
