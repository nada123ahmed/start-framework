import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
  <>
  
   <section className='contact-section'>
      <div className='container'>
        
        <h1 className='text-dark mb-4'>CONTACT SECTION</h1>

        
        <div className="d-flex align-items-center justify-content-center mb-5">
          <span className="line me-3"></span>
          <i className="bi bi-star-fill"></i>
          <span className="line ms-3"></span>
        </div>

       
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'> 
            <form className='contact-form'>
            
              <div className='mb-4'> 
                <label htmlFor='userName' className='form-label'>userName</label>
                <input type='text' className='form-control' id='userName' placeholder=' ' />
              </div>

              <div className='mb-4'>
                <label htmlFor='userAge' className='form-label'>userAge</label>
                <input type='number' className='form-control' id='userAge' placeholder=' ' />
              </div>

          
              <div className='mb-4'>
                <label htmlFor='userEmail' className='form-label'>userEmail</label>
                <input type='email' className='form-control' id='userEmail' placeholder=' ' />
              </div>

         
              <div className='mb-4'>
                <label htmlFor='userPassword' className='form-label'>userPassword</label>
                <input type='password' className='form-control' id='userPassword' placeholder=' ' />
              </div>
              
           
              <button type='submit' className='btn btn-custom'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
