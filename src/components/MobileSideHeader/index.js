import React from 'react'
import './mobileSideHeader.css'

const MobileSideHeader = () => {
  return (
    <div className="mobile-sideheader-container mobile-only">
        <div className="mobile-sideheader-overlay"></div>
        <div className="mobile-sideheader-content">
        <nav>
            <ul>
              <li><a>My Bio</a></li>
              <li><a href="#sectionOne">My Development Skills</a></li>
              <li><a href="#sectionTwo">My Designing Skills</a></li>
              <li><a href="#sectionThree">My Experience</a></li>
              <li><a href="#sectionFour">My Frontend Projects</a></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default MobileSideHeader