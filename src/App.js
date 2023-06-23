import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
const App = () => {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
