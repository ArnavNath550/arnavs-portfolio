import React from 'react'
import './hero.css'
import { Player } from '@lottiefiles/react-lottie-player';
import FadeUp from '../Animations/FadeUp';

const Hero = () => {

  return (
    <section className="hero-section">
      <Player
        src='https://assets8.lottiefiles.com/packages/lf20_h7q0t9pm.json'
        className="player"
        autoplay={true}
        loop={false}
      />

        <div className="hero-profile">
            <div>
                <img src="https://www.craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=128&q=75" />
            </div>
        </div>
        <FadeUp>
            <div className="header-title-container">
                <div className="hero-title">
                    <span>Arnav Nath</span>
                </div>
                <div className="hero-subtitle">
                    Software Developer ( Programmer / Designer )
                </div>
            </div>
        </FadeUp>
    </section>
  )
}

export default Hero