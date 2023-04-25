import React from 'react'
import './designingSkillsSection.css'
import Skill from '../Items/Skill'
import FadeUp from '../Animations/FadeUp'
import SquigglyLine from '../Animations/SquigglyLine'

const DesigningSkillsSection = () => {
  return (
    <section className="design-skills-section" id="sectionTwo">
        <div className="large-section-container">
        <FadeUp>
          <div className="large-header-container">
            <span className="large-header">My Designing Skills</span>
            <span>I don't just build, but build beautifully ✨</span>
          </div>
        </FadeUp>
        <div className="skills-container">
            <Skill skillName="UI, User Interface" />
            <Skill skillName="UX, User Experience" />
            <Skill skillName="Figma" />
            <Skill skillName="Material Design" />
            <Skill skillName="Tailwind" />
            <Skill skillName="Native-Base" />
            <Skill skillName="Canva" />
        </div>
        </div>
    </section>
  )
}

export default DesigningSkillsSection