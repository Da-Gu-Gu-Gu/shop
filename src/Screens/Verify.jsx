import React,{useState} from 'react'
import {publicRequest} from '../utils/requestMethods'
import { useParams } from 'react-router-dom';

function Verify() {
    const {id,token}=useParams()
    const [msg,setMsg]=useState('')
    const updateVerify=()=>{
       try{ publicRequest.put(`/user/verify/${id}/${token}`)
        .then(res=>{
            console.log(res.data)
            setMsg(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    catch{}
    }
    updateVerify()

    return (
    
            <h3 style={{textAlign:'center',marginTop:'100px'}} >
        
    {msg}

      </h3>
    )
}

export default Verify
