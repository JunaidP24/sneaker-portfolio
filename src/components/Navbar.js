import React, { useState, useEffect,useContext } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { auth1, useAuth } from '../contexts/AuthContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const {currentUser,logout} = useAuth()
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigateSignUp = useNavigate()
  const signClick = () => navigateSignUp('/', {replace: true})

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

    // Clean up subscription on unmoun


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return (
    <nav className='my-navbar'>
      <div className='my-navbar-container'>
        <Link to='/' className='my-navbar-logo' onClick={closeMobileMenu}>
          Kick
          <i class='fa fa-list-alt' aria-hidden='true'/>
        </Link>
        <div className='my-menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'my-nav-menu active' : 'my-nav-menu'}>
          <li className='my-nav-item'>
            <Link to='/' className='my-nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='my-nav-item'>
            <Link
              to='/services'
              className='my-nav-links'
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          {currentUser ? (
            <>
              <li className='my-nav-item'>
                <Link
                  to='/inventory'
                  className='my-nav-links'
                  onClick={closeMobileMenu}
                >
                  Inventory
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='my-nav-item'>
                <Link
                  to='/login'
                  className='my-nav-links'
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
        {button && <Button
        onClick={() => {currentUser ? logout() : signClick()}}
        directory= {!currentUser ? '/sign-up' : null}
        buttonStyle='btn--outline'>
        {currentUser ? 'Sign Out' : 'Sign Up'}
        </Button>}
      </div>
    </nav>
  );
 } 

export default Navbar