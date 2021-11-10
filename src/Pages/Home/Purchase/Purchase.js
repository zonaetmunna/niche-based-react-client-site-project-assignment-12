import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import { Container, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { typography } from '@mui/system';
import { useForm } from "react-hook-form";


const Purchase = () => {
     const { id } = useParams();
     const { user } = useAuth();
     const [product, setProduct] = useState({})

     useEffect(() => {
          const url = `https://young-depths-90342.herokuapp.com/products/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProduct(data);
               })
     }, [])


     const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => {

          // send to database
          const url = 'https://young-depths-90342.herokuapp.com/orders';
          fetch(url, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(data => {
                    alert('order added ');
                    reset()
                         ;
               })

     };





     return (
          <div>
               <h1>{id}</h1>
               <Container>
                    <Grid container spacing={2}>
                         <Grid item xs={12} md={6}>
                              <Card sx={{ maxWidth: 345 }}>
                                   <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.image}
                                        alt="green iguana"
                                   />
                                   <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                             {product.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                             {product.tags}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                             {product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                             {product.description}
                                        </Typography>
                                   </CardContent>
                                   <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                   </CardActions>
                              </Card>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography variant="h6" >Please check your information</Typography>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input defaultValue={user.displayName} {...register("userName")} />
                                   <br />
                                   <input defaultValue={user.email}{...register("email")} />
                                   <br />
                                   <input defaultValue={product.name} {...register("productName")} />
                                   <br />
                                   <input defaultValue={product.price} {...register("productPrice")} />
                                   <br />
                                   <input type="number" {...register("productQuantity")} />
                                   <br />
                                   <input type="submit" />
                              </form>



                         </Grid>

                    </Grid>
               </Container>
          </div>
     );
};

export default Purchase;