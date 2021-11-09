import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, ListItemButton, ListItemText, Typography } from '@mui/material';



const Footer = () => {
     return (
          <div>
               <Box sx={{ flexGrow: 1 }}>
                    <Container>
                         <Grid container spacing={2}>
                              <Grid item xs={6} md={3}>
                                   <Typography variant="h4">Help</Typography>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Help" />
                                   </ListItemButton>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                   </ListItemButton>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                   </ListItemButton>
                              </Grid>
                              <Grid item xs={6} md={3}>
                                   <Typography variant="h4">Help</Typography>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                   </ListItemButton>
                              </Grid>
                              <Grid item xs={6} md={3}>
                                   <Typography variant="h4">service</Typography>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                   </ListItemButton>
                              </Grid>
                              <Grid item xs={6} md={3}>
                                   <Typography variant="h4">Contact</Typography>
                                   <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                   </ListItemButton>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </div>
     );
};

export default Footer;