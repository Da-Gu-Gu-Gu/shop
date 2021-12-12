import React from 'react'
import {Container, Button,IconButton} from '@mui/material'
import {List,Avatar} from 'antd'
import { InputNumber } from 'antd';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { removeProduct } from './redux/cartRedux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartList = (props) => {

  const dispatch=useDispatch()
  let quantity=useSelector(state=>state.cart)
    console.log(quantity)
 


  const remove=(aa)=>{
    console.log(aa)
  //  let result= quantity.products.filter(x=>x[2]!=aa)
    dispatch(removeProduct({'id':aa}))
  } 
    return (
        <Container>
            <List 
          dataSource={props.data}
          renderItem={(item,x) => (
            // console.log(quantity.products[item[2]])
            <List.Item key={x}>
              <List.Item.Meta
                avatar={<Avatar src={item[0].img}  />}
                title={<a href="https://ant.design">{item[0].title}</a>}
                description={`size: ${item[0].size}`}
              />
              <div className="cartContent">
              <div style={{fontWeight:'bold'}}>{item[1]}</div>
              {/* <InputNumber min={1} defaultValue={item[1]} style={{width:'55px',outline:'none',marginRight:'5px'}} onChange={(e)=>changeQuantity(e.target.value)} /> */}
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
            
          >
            Confirm
          </Button>
        </div>
        </Container>
    )
}

export default CartList
