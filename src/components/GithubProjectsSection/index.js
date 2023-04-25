import React from 'react'
import './githubProjectsSection.css'
import ShowcaseButton from '../ShowcaseButton '
import { Player } from '@lottiefiles/react-lottie-player'

const GithubProjectsSection = () => {
  return (
    <div className="github-projects-section" id="sectionFour">
        <div className="github-projects-left-section">
            <div className="github-projects-left-heading-container">
                <div className="github-projects-left-heading-text">
                    Check out my projects on,
                    Github
                </div>
                <div className="github-projects-left-subheading-text">
                    Here, i've showcased my proficiency in front-end development, mostly React work
                </div>
                <a className="unstyled-link" href="https://github.com/ArnavNath550?tab=repositories">
                  <ShowcaseButton />
                </a>
            </div>
        </div>
        <div className="github-projects-right-section">
        <Player
        src='https://assets7.lottiefiles.com/packages/lf20_cwqf5i6h.json'
        autoplay={true}
        loop={true}
      />
        </div>
    </div>
  )
}

export default GithubProjectsSection