import React,{createRef,useState} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
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


const ForgotPassword = () => {

   
  const [show,setShow]=useState(false)
    const [error,setError]=useState('')
    const [info,setInfo]=useState(false)
    const email=createRef()

  const submit=()=>{
    if(email.current.value){
        try{
            publicRequest.post('/user/forgotpassword',{
              'email':email.current.value
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
            Please Fill Your Email Here
        </Title>
        
        <Form>

           <input type="email" className="input" ref={email} placeholder="Enter Email" />
           
            <Button color="text" sx={{my:2}} variant="filled" className="login" onClick={submit} fullWidth endIcon={<SendIcon/>} >
                Send
            </Button>
        </Form>
        </Wrap>
        </Container>

        </Wrapper>
    )
}

export default ForgotPassword
