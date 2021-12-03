import React,{useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import {Link} from 'react-router-dom'


const Title=styled.h1`
border-left:5px solid white;
padding-left:10px;
  font-size:2rem;
  color:black !important;
  

`
const Form =styled.div`


  background:white;
  border-radius:15px;
  padding:40px;
  display:flex;
  flex-direction:column;

  
 
`
const Wrap=styled.div`
position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
`
const Wrapper=styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    align-items:center;
  
    vertical-align:middle;
    border:1px solid black;
    background-size:center;
    background-repeat:no-repeat;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8074597/pexels-photo-8074597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
`


const ResetPassword = () => {

   

   const [password,setPassword]=useState()


    

    return (
      <Wrapper>
        <Container>
          <Wrap>
        <Title >
            Reset Password
        </Title>
        
        <Form>

           <input type="password" className="input" placeholder="Enter New Password" />
           <input type="password" className="input" placeholder="Confirm New Password" />
            <Button color="text" sx={{my:2}} variant="filled" className="login" fullWidth  >
                Confirm
            </Button>
        </Form>
        </Wrap>
        </Container>

        </Wrapper>
    )
}

export default ResetPassword
