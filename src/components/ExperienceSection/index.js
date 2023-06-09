import React from 'react'
import './experienceSection.css'
import StartupCard from '../StartupCard'
import FadeUp from '../Animations/FadeUp'

const ExperienceSection = () => {
  const [startupsData, setStartpsData] = React.useState([
    {
      'id': 0,
      'name': 'Studentmesh',
      'date': '2018 - 2019',
      'profession': 'Social media application for schools'
    },
    {
      'id': 1,
      'name': 'Enlazer',
      'date': '2019 - 2020',
      'profession': 'Question forum, for highschool and college students'
    },
    {
      'id': 2,
      'name': 'Flipadeal',
      'date': '2020 - 2021',
      'profession': 'Social Marketplace, Classifieds Platform'
    },
    {
      'id': 3,
      'name': 'Zeemaa',
      'date': '2021 - 2023',
      'profession': 'E-commerce app for Indian Thrift Stores',
      'link': 'www.zeemaa.in',
    }
  ])
  return (
    <div className="experience-section" id="sectionThree">
        <FadeUp>
          <div className="experience-section-heading">
              <span>I've spent my time applying <br />my knowledge in my own startups...</span>
          </div>
        </FadeUp>
        <div className="experience-section-carousel">
            {startupsData.map((y) => {
              return <StartupCard data={y} />
            })}
        </div>
    </div>
  )
}

export default ExperienceSection