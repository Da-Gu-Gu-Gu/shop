import React,{useEffect, useState} from 'react'
import {Container, Button,IconButton} from '@mui/material'
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { publicRequest } from '../utils/requestMethods';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';


const Order = () => {

    const [orderdata,setOrderdata]=useState([])
    const navigate=useNavigate()
    const user=useSelector(state=>state.user.user)
    !user && navigate('/login')
    const token=useSelector(state=>state.user.token)

    useEffect(()=>{
         const getOrder=()=>{

         publicRequest.get(`/order/${user._id}`,{
                headers:{
                    "Authorization":`Bearer ${token}` 
                }
            })
            .then(res=>{
                console.log(res.data)
           
                setOrderdata(res.data)   
            })
        }
        getOrder()
    },[])

    console.log(typeof(orderdata))
    return (
        <Container style={{marginTop:'100px'}}>
            {(orderdata!=='No order')?(
           
            <p>{orderdata.address}</p>
            // {orderdata.map((x)=>{
            //     <Card size="small" title={`OrderId :${x._id}`} extra={<a href="#">More</a>} style={{ width: 300 }}>
            //     <p>{x.address}</p>
            //     <p>$ {x.amount}</p>
            //     <p>Card content</p>
            //   </Card>
            // }
            // )}
            )
    :
    (
        <h3 style={{textAlign:'center'}}>{orderdata}</h3>
    )
}
    </Container>
    )
}

export default Order
