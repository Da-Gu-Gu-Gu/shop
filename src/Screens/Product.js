import React from 'react' 
import {Container,Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import ProductList from '../Components/ProductList'


const Product=()=>{
    return(
        <Container sx={{mt:4}}>
             <Typography variant="h5" component="div" style={{textAlign:'left'}} >
            <Link to="/product" style={{textDecoration:'none',color:'black'}}>
              Products
              </Link>
            </Typography>
            <ProductList />
        </Container>
    )
}

export default Product