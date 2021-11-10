import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = data => {

          const url = 'http://localhost:5000/products';
          fetch(url, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
     };
     return (
          <div>
               <Typography sx={{ textAlign: 'left' }} variant="h5" >Add products</Typography>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="name" />
                    <br />
                    <input {...register("tags")} placeholder="tags" />
                    <br />
                    <input {...register("price")} placeholder="price" />
                    <br />
                    <input {...register("description")} placeholder="description" />
                    <br />
                    <input {...register("image")} placeholder="image" />
                    <br />

                    <input type="submit" />
               </form>
          </div>
     );
};

export default AddProduct;