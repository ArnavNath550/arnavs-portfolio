import React from 'react'
import './experienceSection.css'
import StartupCard from '../StartupCard'
import FadeUp from '../Animations/FadeUp'

const ExperienceSection = () => {
  const [startupsData, setStartpsData] = React.useState([
    {
      'id': 0,
      'name': 'Studentmesh',
      'date': '2013 - 2014',
      'profession': 'Social media application for schools'
    },
    {
      'id': 1,
      'name': 'Enlazer',
      'date': '2015 - 2017',
      'profession': 'Question forum, for highschool and college students'
    },
    {
      'id': 2,
      'name': 'Flipadeal',
      'date': '2018 - 2020',
      'profession': 'Social Marketplace, Classifieds Platform'
    },
    {
      'id': 3,
      'name': 'Zeemaa',
      'date': '2020 - 2022',
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