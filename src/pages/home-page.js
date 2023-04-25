import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BioSection from '../components/BioSection'

const HomePage = () => {
  return (
    <div className="gyanContainer background-hero">
      <div className="background-overlay"></div>
      <Header />
      <Hero />
    </div>
  )
}

export default HomePage