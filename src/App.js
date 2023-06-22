import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Routes,Route } from 'react-router-dom';

const App = () => {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
