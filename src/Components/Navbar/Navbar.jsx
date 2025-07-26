
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom">
      <div className="container-fluid py-4">
        <NavLink className="navbar-brand text-white fw-bolder fs-3" to="/">START FRAMEWORK</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 px-5">
            <li className="nav-item">
            
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-bolder fs-6" : "nav-link text-white fw-bolder fs-6"
                }
                aria-current="page"
                to="About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
          
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-bolder fs-6" : "nav-link text-white fw-bolder fs-6"
                }
                to="Portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
        
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link fw-bolder fs-6" : "nav-link text-white fw-bolder fs-6"
                }
                to="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}