import React from 'react'
import {Container} from '@mui/material'
import {List,Avatar} from 'antd'

const CartList = (props) => {
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
              <div style={{fontWeight:'bold'}}>$ 12</div>
            </List.Item>
          )}
        />
        </Container>
    )
}

export default CartList
