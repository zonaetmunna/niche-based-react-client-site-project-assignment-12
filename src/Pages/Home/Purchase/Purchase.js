import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory, useParams } from 'react-router';
import { Container, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { typography } from '@mui/system';
import { useForm } from "react-hook-form";


const Purchase = () => {
     const { id } = useParams();
     const { user } = useAuth();
     const history = useHistory();
     // product state
     const [product, setProduct] = useState({})
     useEffect(() => {
          const url = `https://young-depths-90342.herokuapp.com/products/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProduct(data);
               })
     }, [id])


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
                    reset();
               })
     };

     // handle back to home page
     const handleBack = () => {
          history.push('/home')
     }


     return (
          <div style={{ margin: 20, }}>
               <Container s>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignContent: 'center', mx: 'auto' }}>
                         <Grid item xs={12} md={6} sx={{}}>
                              <Typography sx={{ mb: 3, color: '#F06046' }} variant="h5">Products details</Typography>
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
                                             Price:  {product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                             {product.description}
                                        </Typography>
                                   </CardContent>
                              </Card>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography sx={{ mb: 3, color: '#F06046' }} variant="h6" >Please check your information</Typography>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input style={{ marginBottom: "10px" }} defaultValue={user.displayName} {...register("userName")} />
                                   <br />
                                   <input style={{ marginBottom: "10px" }} defaultValue={user.email}{...register("email")} />
                                   <br />
                                   <input style={{ marginBottom: "10px" }} type="number" {...register("phone")} placeholder="your number" />
                                   <br />
                                   <input style={{ marginBottom: "10px" }} defaultValue={product.name} {...register("productName")} placeholder={product.name} />
                                   <br />
                                   <input style={{ marginBottom: "10px" }} defaultValue={product.price} {...register("productPrice")} placeholder={product.price} />
                                   <br />
                                   <input style={{ marginBottom: "10px" }} type="number" {...register("productQuantity")} placeholder="quantity" />
                                   <br />
                                   <input sx={{ alignItem: 'center' }} type="submit" value="order" />
                              </form>
                              <Button onclick={handleBack} sx={{ mt: 5 }} variant="container">more shop </Button>
                         </Grid>

                    </Grid>
               </Container>
          </div>
     );
};

export default Purchase;