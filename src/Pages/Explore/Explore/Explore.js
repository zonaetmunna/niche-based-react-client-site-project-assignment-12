import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../../Home/Product/Product';
import Header from '../../Shared/Header/Header';

const Explore = () => {

     const [products, setProducts] = useState([])
     useEffect(() => {
          const url = `https://young-depths-90342.herokuapp.com/products`;
          fetch(url)
               .then(res => res.json())
               .then(data => setProducts(data))
     })
     return (
          <div>
               <Header></Header>
               <Container sx={{ mt: 5 }}>
                    <Typography sx={{ textAlign: 'left' }} variant="h4">All Watch</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                   products.map(product => <Product
                                        key={product._id}
                                        product={product}
                                   ></Product>)
                              }
                         </Grid>
                    </Box>
               </Container>
          </div>
     );
};

export default Explore;