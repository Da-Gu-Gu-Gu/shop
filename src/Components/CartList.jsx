import React from 'react'
import {Container, Button,IconButton} from '@mui/material'
import {List,Avatar} from 'antd'
import { InputNumber } from 'antd';
import CheckIcon from '@mui/icons-material/Check';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartList = (props) => {

  function onChange(value) {
    console.log('changed', value);
  }
    return (
        <Container>
            <List
          dataSource={props.data}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta
                avatar={<Avatar src={item.img.large} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={`size: ${item.size}`}
              />
              <div className="cartContent">
              <InputNumber min={1}  defaultValue={1} style={{width:'55px',outline:'none',marginRight:'5px'}} onChange={onChange} />
              <div style={{fontWeight:'bold'}}>$ 12</div>
              <IconButton aria-label="delete" color='error'>
  <DeleteOutlineIcon />
</IconButton>
              </div>
            </List.Item>
          )}
        />
        <hr/>
        <div style={{float:'right'}}>
          <h1>Total = $ 100</h1>
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
