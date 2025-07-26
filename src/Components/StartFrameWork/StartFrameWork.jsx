import React from 'react'
import "./StartFrameWork.css"
import avatarimg from "../../assets/images/avataaars.svg"

export default function StartFrameWork() {
  return (
    <div className='bg-custom  '>
      <div className='d-flex flex-column row-gap-2 justify-content-center align-items-center h-100 '>
<img className='avatar-img' src={avatarimg} alt="" />
<h2 className='text-white fw-fw-bolder fs-1'>START FRAMEWORK</h2>
<div className="d-flex align-items-center justify-content-center my-4">
    <span className="line me-3"></span>
    <i className="bi bi-star-fill text-white fs-3"></i> <span className="line ms-3"></span>
</div>
 <p className="text-white fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
             
        
     
    </div>
  )
}
