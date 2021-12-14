import React from 'react'
import CartList from '../Components/CartList'
import {useSelector} from 'react-redux'


const Cart = () => {

  const cart=useSelector(state=>state.cart.products)
  // console.log(cart)


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
