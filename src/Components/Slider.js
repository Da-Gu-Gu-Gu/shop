import { Carousel } from 'antd';
import React from 'react'
import {Container } from '@mui/material'

// const contentStyle = {
//   border-radius:'10px'
// };

const Slider=()=>{
    return(
        <Container sx={{mt:4}}>
        <Carousel autoplay >
       
         <img  className="img-carousel"  height='450px' alt="banner-1"
          src="https://images.unsplash.com/photo-1637223901434-e2610da5def9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80"  />
       
       <img  className="img-carousel"  height='450px' alt="banner-2"
       src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

<img  className="img-carousel"  height='450px' alt="banner-3"
       src="https://images.unsplash.com/photo-1606501960142-44af172c5e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80" />

<img  className="img-carousel"  height='450px' alt="banner-4"
       src="https://images.unsplash.com/photo-1615306118623-8b1896dc3655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       
      </Carousel>
      </Container>
    )
}

export default Slider