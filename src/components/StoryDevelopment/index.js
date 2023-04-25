import React from 'react'
import './storyDevelopmentBanner.css'
import FadeUp from '../Animations/FadeUp'
import AnimatedLine from '../Animations/AnimatedLine'

const StoryDevelopment = () => {
  return (
    <div className="story-development-banner">
        <AnimatedLine />
        <FadeUp>
            <div className="story-section" id="storySectionOne">
                <span>10 Years of Knowledge, in Programming</span>
            </div>
        </FadeUp>
        <FadeUp>
            <div className="right-story-section">
                <div className="story-section" id="storySectionOne">
                    <span>A knack for performance measuring</span>
                </div>
            </div>
        </FadeUp>
    </div>
  )
}

export default StoryDevelopment