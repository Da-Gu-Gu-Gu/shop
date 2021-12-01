import React,{useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Title=styled.h1`
border-left:5px solid #9c27b0;
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


const LoginForm = () => {

   

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    

    return (
      <Wrapper>
        <Container>
          <Wrap>
        <Title >
            Login Here
        </Title>
        
        <Form>

           <input type="email" className="input" placeholder="Enter Email" />
            <input type="password" className="input" placeholder="Enter Password" />
            <Link to="/forgotpassword" className="forgotpassword">forgotpassword ?</Link>
            <Button color="text" sx={{my:2}} variant="filled" className="login" fullWidth endIcon={<ArrowForwardIcon/>} >
                Login
            </Button>
            <span style={{color:'black'}}>If you don't have an account, <Link to="/signup" style={{color:'#9c27b0'}} >Sign Up</Link> here</span>
        </Form>
        </Wrap>
        </Container>

        </Wrapper>
    )
}

export default LoginForm
