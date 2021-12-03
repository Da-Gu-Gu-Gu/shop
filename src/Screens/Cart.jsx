import React from 'react'
import CartList from '../Components/CartList'

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
      size:'XL',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
      size:'XL',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
      size:'XL',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
      size:'XL',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
      size:'XL',
    },


  ];

const Cart = () => {
    return (
        <div>
            <h1 style={{textAlign:'left',marginBottom:'30px'}} >
        
      Your Products

      </h1>
      <CartList data={itemData} />
        </div>
    )
}

export default Cart
