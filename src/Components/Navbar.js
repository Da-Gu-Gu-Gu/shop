import React from 'react' 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Container,Badge,} from '@mui/material'
import {Link} from 'react-router-dom' 
import {useSelector} from 'react-redux'
import {  Dropdown } from 'antd';
import NavMenu from './navMenu';

//navMenu logout loke ya mhr

const Navbar=()=>{

  const cart=useSelector(state=>state.cart.quantity)
  const user=useSelector(state=>state.user.user)
    return(
     
           
        <AppBar   style={{backgroundColor:'#202124',marginBottom:'100px'}}>
        <Container>
          <Toolbar>
              <Link to="/" >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 ,color:'white'}}
            >
              <ShoppingBasketIcon  />
            </IconButton>
            </Link>
           
            <Typography variant="h6" component="div" style={{textAlign:'center'}} sx={{ flexGrow: 1 ,color:'white'}}>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>
              Dagugugu
              </Link>
            </Typography>
           
            <Link to="/cart" style={{textDecoration:'none',color:'white'}}>
          <Badge color="secondary" badgeContent={cart}   sx={{mr:5}}  >
            <ShoppingCartIcon />
</Badge>
</Link>

{user?(
  <Dropdown overlay={<NavMenu/>}  placement="topCenter">
<Avatar sx={{ width: 26, height: 26 }} alt="user profile" src={user.profile} />
</Dropdown>
):
(<Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link>)
    }

          </Toolbar>
          </Container>
        </AppBar>
        
     
    )
}

export default Navbar