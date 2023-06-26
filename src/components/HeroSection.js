import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
function HeroSection() {
  return (
    <div className = 'hero-container'>
        <h1>Step up your sneaker game</h1>
        <p>What are you waiting for?</p>
            <Button className = 'btns' directory='/sign-up' buttonStyle = 'btn--primary'
            buttonSize='btn--large'>Get Started Now</Button>

    </div>
  )
}

export default HeroSection