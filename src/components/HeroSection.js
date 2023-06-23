import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
function HeroSection() {
  return (
    <div className = 'hero-container'>
        <h1>STEP UP YOUR SNEAKER GAME</h1>
        <p>What are you waiting for?</p>
            <Button className = 'btns' buttonStyle = 'btn--outline'
            buttonSize='btn--large'>Get Started Now</Button>

    </div>
  )
}

export default HeroSection