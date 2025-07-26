import React from 'react'
import  "./About.css"
export default function About() {
  return (
    <>
 



     <section className='about-section text-white'>
      <div className='container'>
    
        <h1 className='mb-4'>ABOUT COMPONENT</h1>

      
        <div className="d-flex align-items-center justify-content-center mb-5">
          <span className="line me-3"></span>
          <i className="bi bi-star-fill"></i> 
          <span className="line ms-3"></span>
        </div>


        <div className='row justify-content-center'> 
          <div className='col-lg-4 col-md-6 mb-4 mb-md-0'> 
            <p className='about-text-column'>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className='col-lg-4 col-md-6'>
            <p className='about-text-column'>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as
              optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
