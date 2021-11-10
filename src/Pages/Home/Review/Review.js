import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(() => {
          const url = 'https://young-depths-90342.herokuapp.com/review';
          fetch(url)
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [])
     return (
          <div>
               <Container sx={{ m: 5 }}>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" >Customer Review</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              reviews.map(review => <Grid item xs={2} sm={4} md={4} key={review._id}>
                                   <Card sx={{ maxWidth: 345 }}>

                                        <CardContent>
                                             <Typography gutterBottom variant="h5" component="div">
                                                  {review.productName
                                                  }
                                             </Typography>
                                             <Typography variant="body2" color="text.secondary">
                                                  {review.comment}
                                             </Typography>
                                        </CardContent>

                                   </Card>
                              </Grid>)
                         }
                    </Grid>
               </Container>
          </div>
     );
};

export default Review;