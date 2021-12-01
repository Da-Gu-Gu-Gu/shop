import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'

const Wrapper=styled.div`
    width:100%;
    height:100%;
    background:#e0aaff;
  
`
const Image=styled.img`
position:
&:hover {
    opacity:0.5;
    cursor:pointer;
    .title{
        display:block !important;
    },
    
  }
`
const Title=styled.span`

    color:black;
    font-size:1.1rem;
    font-weight:bold;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`

const itemData = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8402262/pexels-photo-8402262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "SHIRT STYLE!",
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/10335069/pexels-photo-10335069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "LIGHT JACKETS",
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/8159074/pexels-photo-8159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "LOUNGEWEAR LOVE",
      },
     
  ];

const itemData2=[
    {
        id:1,
        img:'https://images.pexels.com/photos/7624296/pexels-photo-7624296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title:'Ahfle'
    },
    {
        id:2,
        img:'https://images.pexels.com/photos/6069966/pexels-photo-6069966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title:'adsfjio'
    },
]

const Category = () => {
    return (
        <Wrapper>
            <Container style={{paddingTop:'44px',paddingBottom:'44px'}} >
            <Typography variant="h5" component="div" style={{textAlign:'left',marginBottom:'30px'}} >
      
              Category
 
            </Typography>
            <Grid container  spacing={0} >
                {itemData.map((item)=>(
              <Grid item xs={4} key={item.id} style={{height:'300px',position:'relative'}}>
                  <Image src={item.img} height="300px" width="100%" alt={item.title}/>
                  <Title className="title">{item.title}</Title>
                  </Grid>
                ))}
            </Grid>
            <Grid container  spacing={0}>
                {itemData2.map((item)=>(
              <Grid   className="aa" item key={item.id} xs={6} style={{height:'250px',position:'relative'}}>
                  <Image src={item.img} height="250px" width="100%" alt={item.title}/>
                  <Title className="title">{item.title}</Title>
                  </Grid>
                ))}
                  
            </Grid>
            </Container>
          

        </Wrapper>
    )
}

export default Category
