import React,{useState,useEffect} from 'react'
import {Container, Button,IconButton} from '@mui/material'
import {List,Avatar} from 'antd'

import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { removeProduct } from './redux/cartRedux';
import {useNavigate} from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StripeCheckout from 'react-stripe-checkout'
import { publicRequest } from '../utils/requestMethods';


const Key=process.env.REACT_APP_STRIPE

const CartList = (props) => {

  const [stripeToken,setStripeToken]=useState(null)

  const dispatch=useDispatch()
  let quantity=useSelector(state=>state.cart)
  let user=useSelector(state=>state.user.user)
 const navigate=useNavigate()

 const onToken=(token)=>{
   setStripeToken(token)
 }
 console.log(stripeToken)

 useEffect(()=>{
    const makeRequest=async ()=>{
      try{
          const res=await publicRequest.post()
      }
      catch{}
    }
 }
 )
  const confirm=()=>{
  
    console.log(user)  
    // if(!user){
    //    navigate('/login')
    // }
  }

  const remove=(aa)=>{
    dispatch(removeProduct({'id':aa}))
  } 
    return (
        <Container>
            <List 
          dataSource={props.data}
          renderItem={(item,x) => (
      
            <List.Item key={x}>
              <List.Item.Meta
                avatar={<Avatar src={item[0].img}  />}
                title={<a href="https://ant.design">{item[0].title}</a>}
                description={`size: ${item[0].size}`}
              />
              <div className="cartContent">
              <div style={{fontWeight:'bold'}}>{item[1]}</div>
 
              <div style={{fontWeight:'bold'}}>$ {item[0].price * item[1]}</div>
              <IconButton aria-label="delete" color='error' onClick={()=>remove(item[2])}>
  <DeleteOutlineIcon />
</IconButton>
              </div>
            </List.Item>
          )}
        />
        <hr/>
        <div style={{float:'right'}}>
          <h1>Total = $ {quantity.total}</h1>
          <StripeCheckout
          name="Dagugugu Shop"
          image=""
          billingAddress
          shippingAddress
          description={`Your total is ${quantity.total}`}
          amount={quantity.total*100}
          token={onToken}
          stripeKey={Key}
          >
          <Button
           style={{backgroundColor:'black',color:'white',float:'right'}}
            variant="filled" 
            endIcon={<CheckIcon/>}
            onClick={()=>confirm()}
          >
            Confirm
          </Button>
          </StripeCheckout>
        </div>
        </Container>
    )
}

export default CartList
