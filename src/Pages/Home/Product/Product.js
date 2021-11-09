import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
     const { id, name, tags, image, description, price } = product;
     const history = useHistory();


     const handleGoPurchase = () => {
          const url = `/purchase/${id}`;
          history.push(url)
     }

     return (
          <Grid item xs={2} sm={4} md={4} >
               <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                         component="img"
                         height="300"
                         image={image}
                         alt="green iguana"
                    />
                    <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                              {name}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              {tags}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              {price}
                         </Typography>
                    </CardContent>
                    <CardActions>
                         <Button onClick={handleGoPurchase} variant="contained">order now</Button>

                    </CardActions>
               </Card>
          </Grid>
     );
};

export default Product;