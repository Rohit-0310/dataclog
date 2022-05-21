import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate()

    const handlHome = () => {
        navigate("/")
    }

    const handlLogin = () => {
        navigate("/Login")
    }

    const handlRegistration = () => {
        navigate("/Registration")
    }
    const handlUserDetails = () => {
      navigate("/UserDetails")
  }

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
            <Button onClick={()=>handlHome()} color="inherit">Home Page</Button>
              <Typography onClick={()=>handlUserDetails()} variant="h6" color="red" component="div" sx={{ flexGrow: 1 }}>
              User Details
                
              </Typography>
              <Button onClick={()=>handlLogin()} color="inherit">Login</Button>
              <Button onClick={()=>handlRegistration()} color="inherit">Registration</Button>
            </Toolbar>
          </AppBar>
        </Box>
        );
    
}

export default NavBar