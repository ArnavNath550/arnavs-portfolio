import React from 'react'
import './footerSection.css'

const FooterSection = () => {
  return (
    <div className="footer-section">
        <div>
            Made with ❤️ by <strong>Arnav</strong>
        </div>
        <div className="download-resume-btn">
            <a class="unstyled-link" href="/files/resume.pdf" download>
              Download Resume
            </a>
        </div>
    </div>
  )
}

export default FooterSection