import React from 'react' 
import Slider from '../Components/Slider'
import Product from './Product'
import Category  from '../Components/Category'
import Footer from '../Components/Footer'
const Home=()=>{
    return (
        <>
       <Slider/>
       <Category/>
        <Product/>
        <Footer/>
        </>
    )
}

export default Home