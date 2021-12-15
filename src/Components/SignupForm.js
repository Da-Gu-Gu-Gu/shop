import React,{useState,createRef} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { publicRequest } from '../utils/requestMethods'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

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


const SignupForm = () => {

  const name=createRef()
    const email=createRef()
    const password=createRef()
    const cpassword=createRef()
    const [show,setShow]=useState(false)
    const [error,setError]=useState('')
    const [info,setInfo]=useState(false)

    const signup=()=>{
      if(email.current.value && password.current.value && cpassword.current.value && name.current.value) {
      if(password.current.value===cpassword.current.value){
      try{
        publicRequest.post('/user/register',{
          'name':name.current.value,
          'email':email.current.value,
          'password':password.current.value,
        })
        .then(res=>{
          console.log(res.data)
          setShow(true)
          if(res.data.msg ){
            setInfo(true)
            console.log(res.data.msg)
            setError(res.data.msg)
          }
          else{setError(res.data)}
        }
        )
      }
      catch{}
    }
    setShow(true)
    setError('Password doesn\'t match!')
  }
  else{
    setShow(true)
    setError("Please fill all data")
  }
}
  
    return (
      <Wrapper>
        <Container>
          <Wrap>
          { show && (<Stack sx={{ width: '100%' }}  my={3} spacing={2}>
     
     <Alert  
         action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setShow(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        severity="error" color={info?'info':'error'} >{error}</Alert>
   </Stack>

         )}
        <Title >
            Signup Here
        </Title>
        
        <Form>

        <input type="text" className="input" ref={name} placeholder="Enter Name" />
           <input type="email" className="input" ref={email} placeholder="Enter Email" />
            <input type="password" className="input" ref={password} placeholder="Enter Password" />
          <input type="password" className="input"  ref={cpassword} placeholder="Confirm Password" />
            <Button color="text" sx={{my:2}} onClick={signup} variant="filled" className="login" fullWidth endIcon={<ArrowForwardIcon/>} >
                Sign up
            </Button>
            <span style={{color:'black'}}>If you have already account ?, <Link to="/login" style={{color:'#9c27b0'}} >Login</Link> here</span>
        </Form>
        </Wrap>
        </Container>

        </Wrapper>
    )
}

export default SignupForm
