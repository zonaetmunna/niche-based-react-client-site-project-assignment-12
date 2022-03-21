import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import Header from '../../Shared/Header/Header';



const Products = () => {

     const [products, setProducts] = useState([]);
     useEffect(() => {
          const url = 'https://young-depths-90342.herokuapp.com/products';
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProducts(data);
               })
     }, [])

     return (
          <div>

               <Container sx={{ mt: 5 }}>
                    <Typography sx={{ textAlign: 'left', color: 'black', mb: 2 }} variant="h4">Watch Product</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                   products.slice(0, 6).map(product => <Product
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

export default Products;