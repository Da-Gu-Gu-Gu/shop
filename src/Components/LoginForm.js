import React,{createRef,useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {publicRequest} from '../utils/requestMethods'
import { useDispatch } from 'react-redux'
import { getUser,setToken } from './redux/userRedux'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom'
 

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

  const navigate=useNavigate()
   const dispatch=useDispatch()
    const [show,setShow]=useState(false)
    const [error,setError]=useState('')

   let email=createRef()
   let password=createRef()
 
        const loginUser=async ()=>{
          if(email.current.value && password.current.value ) {
          try{
            publicRequest.post('/user/login',{
            'email':email.current.value,
            'password':password.current.value,
           })
          .then((res)=>{
            if(!res.data.token){
              setShow(true)
              setError(res.data)
            }
           dispatch(setToken(res.data.token))
            publicRequest.get('/user/auth',{
              headers:{
                "Authorization":`Bearer ${res.data.token}`
              }
            })
            .then((res)=>{
              setShow(false)
              dispatch(getUser({user:res.data}))
              res.data.adminLr?navigate('/dashboard'):navigate('/')
            })
            .catch(err=>{
              console.log(err)
            })
          })
        }
      catch(err){
        console.log(err)
      }
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
         { show && (<Stack sx={{ width: '100%' }}  mb={3} spacing={2}>
     
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
        severity="error" color='error' >{error}</Alert>
   </Stack>

         )}
        <Title >
            Login Here
        </Title>
        
        <Form>

           <input type="email" ref={email} className="input" placeholder="Enter Email"  />
            <input type="password" ref={password} className="input" placeholder="Enter Password" />
            <Link to="/forgotpassword" className="forgotpassword">forgotpassword ?</Link>
            <Button color="text" sx={{my:2}} variant="filled" onClick={()=>loginUser()} className="login" fullWidth endIcon={<ArrowForwardIcon/>} >
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
