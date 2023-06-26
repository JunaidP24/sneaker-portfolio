import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/Signup'
import Login from './components/pages/Login'
import { AuthProvider } from './contexts/AuthContext';



const App = () => {
  
  return (
    <AuthProvider>
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' exact Component={Home} />
          <Route path = '/sign-up' exact Component={SignUp}/>
          <Route path = '/login' exact Component={Login}/>
        </Routes>
      </Router>
    </>
    </AuthProvider>
  );
}

export default App;
