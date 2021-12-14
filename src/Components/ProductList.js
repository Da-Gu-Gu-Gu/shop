import React,{useState,useEffect} from 'react'
import { Container,Box } from '@mui/material'
import Masonry from 'react-masonry-css'
import {publicRequest} from '../utils/requestMethods'
import {Link} from 'react-router-dom'



const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  800: 2,
  500: 1
};
const ProductList = () => {
  const [product,setProduct]=useState([])

  useEffect(()=>{
    const getProduct=async ()=>{
      try{
          publicRequest.get('/product/getall')
          .then((res)=>{
            setProduct(res.data)
           
          })
      }
      catch{}
    }
    getProduct()
  },[])

  return (
    <Container sx={{ mt: 5,mb:4 }}>
      <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {product.map((item) => (
          <Link to={`product/${item._id}`}    state={{ data: item}} key={item._id} params={item}>
          <Box >
            <img
            width="100%"
              src={`https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format`}
              srcSet={`https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </Box>
          </Link>
        ))}
      </Masonry>
    </Container>
    </Container >
    )
}

export default ProductList