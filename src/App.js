import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Routes,Route,Prote } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/Signup'
import Login from './components/pages/Login'
import Inventory from './components/pages/Inventory';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';


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
          <Route path="/inventory" element ={
            <PrivateRoute>
              <Inventory/>
            </PrivateRoute>
          }>
          </Route>
        </Routes>
      </Router>
    </>
    </AuthProvider>
  );
}

export default App;
