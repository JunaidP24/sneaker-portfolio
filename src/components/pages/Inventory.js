import React, {useState} from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import currentUser from '../Navbar'



const Inventory = () => {
    
    if (!currentUser) {
        return <Navigate to='/' replace/>
    }
    return (
        <h1>Inventory</h1>
    )
}

export default Inventory