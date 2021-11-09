import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const products = [
     {
          id: '1',
          name: 'Demo product title',
          tags: 'gold, gray, l, m, magenta',
          price: '80.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/CB3Bq8s/product-1.jpg'

     },
     {
          id: '2',
          name: 'Reprizo Gold Dial Watch',
          tags: 'lather',
          price: '540.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/hWpGgC0/product-2.png'

     },
     {
          id: '3',
          name: 'Fastrack Men’s Watch',
          tags: 'lather',
          price: '420.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/DLgkk4L/product-3.png'

     },
     {
          id: '4',
          name: 'Lawson Franklin 44 Men’s Watch',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/94Sr4pF/product-5.jpg'

     },
     {
          id: '5',
          name: 'Sky-Dweller',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/cgTHXnZ/product-10.jpg'

     },
     {
          id: '6',
          name: 'Day-Date',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/CzLYFW6/product-11.jpg'

     },
     {
          id: '7',
          name: 'Lawson Franklin 44 Men’s Watch',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/xhMM88f/product-9.jpg'

     },
     {
          id: '8',
          name: 'Lawson Franklin 44 Men’s Watch',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/Y388h1n/product-8.jpg'

     },
     {
          id: '9',
          name: 'Lawson Franklin 44 Men’s Watch',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: ''

     },
     {
          id: '10',
          name: 'Lawson Franklin 44 Men’s Watch',
          tags: 'silicon',
          price: '310.00',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
          image: 'https://i.ibb.co/fDb6L66/product-7.jpg'

     }
];

const Products = () => {
     return (
          <div>
               <Container sx={{ mt: 5 }}>
                    <Typography sx={{ textAlign: 'center' }} variant="h2">watch</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                   products.slice(0, 6).map(product => <Product
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