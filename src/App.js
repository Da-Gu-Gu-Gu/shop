// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router ,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Screens/Home'
import Navbar from './Components/Navbar'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword  from './Components/ResetPassword';
import Cart from './Screens/Cart'
import SingleProduct from './Screens/SingleProduct'

function App() {
  return (
    <Router>
       <Navbar/>
        <Routes>
         
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword/:id/:token" element={<ResetPassword/>} />
          <Route  path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  );
}

export default App;
