import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

/* const useStyle = makeStyles({
     root: {
          background: '#FFA07A'
     },
}); 

 const { root } = useStyle();
 className={root}
*/

const Header = () => {
     const { user, logOut } = useAuth();

     return (
          <div  >
               <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" >
                         <Toolbar>
                              <IconButton
                                   size="large"
                                   edge="start"

                                   aria-label="menu"
                                   sx={{ mr: 2 }}
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                   The Hands of Time
                              </Typography>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                   <NavLink to="/explore">Explore</NavLink>
                              </Typography>
                              {user.email ?
                                   <Button onClick={logOut} color="inherit">Logout</Button>
                                   : <NavLink to="/login"><Button variant="contained">Login</Button>
                                   </NavLink>}


                         </Toolbar>
                    </AppBar>
               </Box>


          </div >
     );
};

export default Header;