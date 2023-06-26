import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import {useAuth} from '../contexts/AuthContext'


function HeroSection() {
  const {currentUser} = useAuth()
    return currentUser ? (
      <div className = 'hero-container'>
          <h1>Track your sneaker collection <strong>NOW</strong></h1>
          <p>What are you waiting for?</p>
              <Button className = 'btns' directory='/inventory' buttonStyle = 'btn--primary'
              buttonSize='btn--large'>View Your Inventory</Button>
  
      </div> )
    : (
      <div className = 'hero-container'>
          <h1>Step up your sneaker game</h1>
          <p>What are you waiting for?</p>
              <Button className = 'btns' directory='/sign-up' buttonStyle = 'btn--primary'
              buttonSize='btn--large'>Get Started Now</Button>
  
      </div>
    )
  }

export default HeroSection