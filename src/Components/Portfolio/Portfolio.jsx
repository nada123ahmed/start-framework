import React from 'react'
import "./Portfolio.css"
import poert1 from "../../assets/images/poert1 (1).png"
import poert2 from "../../assets/images/port2.png"
import poert3 from "../../assets/images/port3.png"
export default function Portfolio() {
  return (
    
    <>
    
     <section className='portfolio-section'>
      <div className='container'>
        <h1 className='text-dark mb-4'>PORTFOLIO COMPONENT</h1>

     
        <div className="d-flex align-items-center justify-content-center mb-5">
          <span className="line me-3"></span>
          <i className="bi bi-star-fill"></i>
          <span className="line ms-3"></span>
        </div>

        
        <div className='row g-4'> 

          {/* الصورة الأولى */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert1} className='img-fluid' alt='Cabin' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

          {/* الصورة الثانية */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert2} className='img-fluid' alt='Cake' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

          {/* الصورة الثالثة */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert3} className='img-fluid' alt='Circus' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

          {/* الصورة الرابعة */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert1} className='img-fluid' alt='Game' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

          {/* الصورة الخامسة */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert2} className='img-fluid' alt='Safe' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

          {/* الصورة السادسة */}
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='portfolio-item'>
              <img src={poert3} className='img-fluid' alt='Submarine' />
              <div className="overlay">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>

        </div> 
      </div> 
    </section>
    

    </>
    
  )
}
