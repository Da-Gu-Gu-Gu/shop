import React,{useState,createRef} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Container,IconButton } from '@mui/material'
import {Link} from 'react-router-dom'
import { publicRequest } from '../utils/requestMethods'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';


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

   
const {id,token}=useParams()
const password=createRef()
const cpassword=createRef()
const [show,setShow]=useState(false)
const [error,setError]=useState('')
const [info,setInfo]=useState(false)

const submit=()=>{
  if(password.current.value && cpassword.current.value){
 
  try{
      publicRequest.put(`/user/resetpassword/${id}/${token}`,{
        'password':password.current.value,
        'confirmPassword':cpassword.current.value
      })
      .then(res=>{
        setShow(true)
              if(res.data.msg ){
                setInfo(true)
                console.log(res.data.msg)
                setError(res.data.msg)
              }
              else{setError(res.data)}
            
      })
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
            Reset Password
        </Title>
        
        <Form>

           <input type="password" className="input" ref={password}  placeholder="Enter New Password" />
           <input type="password" className="input" ref={cpassword} placeholder="Confirm New Password" />
            <Button color="text" sx={{my:2}} variant="filled" onClick={submit} className="login" fullWidth  >
                Confirm
            </Button>
        </Form>
        </Wrap>
        </Container>

        </Wrapper>
    )
}

export default ResetPassword
