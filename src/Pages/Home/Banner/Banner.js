import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
     root: {
          background: '#EDF5F5'
     },
});




const Banner = () => {
     const { root } = useStyle();
     return (
          <div className={root}>
               <Container sx={{ mt: 3 }}>
                    <Box sx={{ flexGrow: 1, }} >
                         <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Grid item xs={12} md={6}>
                                   <Typography sx={{ color: 'secondary.main', m: 2 }} variant="h3">The stone series</Typography>
                                   <Typography variant="body1" sx={{ m: 2 }}>Rolex offers a wide range of models ranging from professional to classic watches to suit</Typography>
                                   <Button sx={{ m: 2 }} variant="contained"><Link style={{ textDecoration: 'none' }} to="/explore">Explore</Link></Button>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                   <img src="https://i.ibb.co/m56xf2m/banner.jpg" style={{ width: '75%' }} alt="" />
                              </Grid>

                         </Grid>
                    </Box>
               </Container>
          </div>
     );
};

export default Banner;