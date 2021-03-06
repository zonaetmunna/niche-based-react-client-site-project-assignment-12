import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import ReviewUser from '../ReviewUser/ReviewUser';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

function Dashboard(props) {
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);

     // nested route
     const { path, url } = useRouteMatch();
     // 
     const { user, admin, logOut } = useAuth();

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };

     const drawer = (
          <div>
               <Toolbar />
               <Divider />
               {/*nav link */}
               <Box sx={{ px: 4 }}>
                    <Link to="/home" style={{ textDecoration: 'none' }} >Home</Link>
                    <br />
                    {admin ? <Box>
                         <Link to={`${url}/manageAllOrders`} style={{ textDecoration: 'none' }} >Manage all order</Link>
                         <br />
                         <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }} >Add Product</Link>
                         <br />
                         <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }} >Make Admin</Link>
                         <br />
                         <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none' }} >Manage Products</Link>
                    </Box> :
                         <Box>

                              <Link to={`${url}`} style={{ textDecoration: 'none' }} >MyOrders</Link>
                              <br />

                              <Link to={`${url}/reviewUser`} style={{ textDecoration: 'none' }} >Review</Link>
                              <br />
                              <Link to={`${url}/payment`} style={{ textDecoration: 'none' }} >Pay</Link>
                              <br />
                         </Box>
                    }

                    <Link to={`${url}/payment`} style={{ textDecoration: 'none' }} ><Button onClick={logOut} color="inherit">Logout</Button></Link>
               </Box>

          </div>
     );

     const container = window !== undefined ? () => window().document.body : undefined;

     return (
          <Container >
               {/* <Grid item spacing={2}> */}
               {/* <Grid xs={12} md={6}> */}
               <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                         position="fixed"
                         sx={{
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                              ml: { sm: `${drawerWidth}px` },
                         }}
                    >
                         <Toolbar>
                              <IconButton
                                   color="inherit"
                                   aria-label="open drawer"
                                   edge="start"
                                   onClick={handleDrawerToggle}
                                   sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" noWrap component="div">
                                   Dashboard
                              </Typography>
                         </Toolbar>
                    </AppBar>
                    <Box
                         component="nav"
                         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                         aria-label="mailbox folders"
                    >
                         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                         <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                   keepMounted: true, // Better open performance on mobile.
                              }}
                              sx={{
                                   display: { xs: 'block', sm: 'none' },
                                   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                         >
                              {drawer}
                         </Drawer>
                         <Drawer
                              variant="permanent"
                              sx={{
                                   display: { xs: 'none', sm: 'block' },
                                   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                              open
                         >
                              {drawer}
                         </Drawer>
                    </Box>

                    <Box
                         component="main"
                         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                         <Toolbar />
                         {/*  */}
                         {/* <Grid xs={12}> */}
                         <Switch>
                              <Route exact path={path}>
                                   <MyOrders></MyOrders>
                              </Route>
                              <Route path={`${path}/reviewUser`}>
                                   <ReviewUser></ReviewUser>
                              </Route>
                              <Route path={`${path}/payment`}>
                                   <Payment></Payment>
                              </Route>
                              <AdminRoute path={`${path}/manageAllOrders`}>
                                   <ManageAllOrders></ManageAllOrders>
                              </AdminRoute>
                              <AdminRoute path={`${path}/addProduct`}>
                                   <AddProduct></AddProduct>
                              </AdminRoute>
                              <AdminRoute path={`${path}/makeAdmin`}>
                                   <MakeAdmin></MakeAdmin>
                              </AdminRoute>
                              <AdminRoute path={`${path}/manageProducts`}>
                                   <ManageProducts></ManageProducts>
                              </AdminRoute>
                         </Switch>
                         {/* </Grid> */}

                    </Box>
               </Box>
               {/* </Grid> */}
               {/* </Grid> */}
          </Container>
     );
}

Dashboard.propTypes = {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window: PropTypes.func,
};

export default Dashboard;