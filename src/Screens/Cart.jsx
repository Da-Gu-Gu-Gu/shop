import React from 'react'
import CartList from '../Components/CartList'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'



const Cart = () => {

  const navigate=useNavigate()
  const user=useSelector(state=>state.user.user)
    console.log(user)

  const cart=useSelector(state=>state.cart.products)
  // console.log(cart)
useEffect(()=>{
  !user && navigate('/login')
})

    return (
     
      
        <div>
            <h1 style={{textAlign:'left',marginBottom:'30px'}} >
        
      Your Products

      </h1>
      <CartList data={cart} />
        </div>
      )
    
}

export default Cart
