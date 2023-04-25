import React from 'react'
import './developmentSkillsSection.css'
import Skill from '../Items/Skill'
import FadeUp from '../Animations/FadeUp'
import SquigglyLine from '../Animations/SquigglyLine'

const DevelopmentSkillsSection = () => {
  return (
    <section className="development-skills-section" id="sectionOne">
        <div className="large-section-container">
        <FadeUp>
          <div className="large-header-container">
            <span className="large-header">My Devolpment Skills</span>
            <span>Frontend - Backend - Servers 💻</span>
          </div>
        </FadeUp>
        <div className="skills-container">
              <Skill skillName="HTML, CSS" />
              <Skill skillName="Javscript" />

              <Skill skillName="React" />


              <Skill skillName="Typescript" />


              <Skill skillName="React-native" />


              <Skill skillName="Kotlin" />


              <Skill skillName="PHP" />


              <Skill skillName="OOP Fundamentals" />


              <Skill skillName="Python & Django" />


              <Skill skillName="SQL" />

              <Skill skillName="AWS" />

        </div>
        </div>
    </section>
  )
}

export default DevelopmentSkillsSection