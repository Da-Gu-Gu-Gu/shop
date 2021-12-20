import {Menu} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import { logoutUser } from './redux/userRedux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'




function NavMenu() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logout=()=>{
         dispatch(logoutUser())
         navigate("/")
    }
    return (
        <Menu style={{zIndex:'3',marginTop:'18px',padding:'10px'}}>
           <Menu.Item>
          <Link to="/orderlist" style={{color:'black'}}>
           Orders
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile" style={{color:'black'}}>
           Profile
          </Link>
        </Menu.Item>
        <Menu.Item>
    <p style={{color:'red'}} onClick={()=>logout()}>
       Logout
          </p>
        </Menu.Item>
        
      </Menu>
    )
}

export default NavMenu

