import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router ,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Screens/Home'
import Navbar from './Components/Navbar'


function App() {
  return (
    <Router>
       <Navbar/>
        <Routes>
         
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<h1> Login</h1>}/>
          <Route  path="/cart" element={<h1>Cart</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
