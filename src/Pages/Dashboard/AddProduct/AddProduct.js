import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => {

          const url = 'https://young-depths-90342.herokuapp.com/products';
          fetch(url, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         alert('data added ')
                         reset();
                    }
               })
     };
     return (
          <div>
               <Container>
                    <Grid item spacing={2}>
                         <Grid xs={12} sm={6} md={6}>
                              <Typography sx={{ textAlign: 'left' }} variant="h5" >Add products</Typography>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input style={{ marginTop: '10px' }} {...register("name")} placeholder="name" />
                                   <br />
                                   <input style={{ marginTop: '10px' }}  {...register("tags")} placeholder="tags" />
                                   <br />
                                   <input style={{ marginTop: '10px' }}  {...register("price")} placeholder="price" />
                                   <br />
                                   <input style={{ marginTop: '10px' }} {...register("description")} placeholder="description" />
                                   <br />
                                   <input style={{ marginTop: '10px' }}  {...register("image")} placeholder="image" />
                                   <br />

                                   <input style={{ marginTop: '10px' }} type="submit" />
                              </form>
                         </Grid>
                         <Grid xs={12} sm={6} md={6}>

                         </Grid>
                    </Grid>
               </Container>
          </div>
     );
};

export default AddProduct;