import React from 'react'
import {Container, Button,IconButton} from '@mui/material'
import {List,Avatar} from 'antd'

import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { removeProduct } from './redux/cartRedux';
import {useNavigate} from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartList = (props) => {

  const dispatch=useDispatch()
  let quantity=useSelector(state=>state.cart)
  let user=useSelector(state=>state.user.user)
 const navigate=useNavigate()

  const confirm=()=>{
  
    console.log(user)  
    if(!user){
       navigate('/login')
    }
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
          <Button
           style={{backgroundColor:'black',color:'white',float:'right'}}
            variant="filled" 
            endIcon={<CheckIcon/>}
            onClick={()=>confirm()}
          >
            Confirm
          </Button>
        </div>
        </Container>
    )
}

export default CartList
