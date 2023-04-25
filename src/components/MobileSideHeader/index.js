import React from 'react'
import './mobileSideHeader.css'

const MobileSideHeader = ({setToggleSidebar}) => {
  const changePane = (type) => {
    setToggleSidebar();
    window.location = `/#${type}`;
  }
  return (
    <div className="mobile-sideheader-container mobile-only">
        <div className="mobile-sideheader-overlay"></div>
        <div className="mobile-sideheader-content">
        <nav>
            <ul>
              <li>My Bio</li>
              <li  onClick={() => changePane("sectionOne")}>My Development Skills</li>
              <li  onClick={() => changePane("sectionTwo")}>My Designing Skills</li>
              <li  onClick={() => changePane("sectionThree")}>My Experience</li>
              <li onClick={() => changePane("sectionFour")}>My Frontend Projects</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default MobileSideHeader