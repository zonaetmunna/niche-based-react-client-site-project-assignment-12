import React from 'react';
import { useForm } from "react-hook-form";


const ReviewUser = () => {
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => {
          const url = 'https://young-depths-90342.herokuapp.com/review';
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
                         alert('comment add successfully');
                         reset();

                    }
                    console.log(data);
               })
     };

     return (
          <div>
               <h1>Please review our service</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("productName")} />
                    <br />
                    <input  {...register("comment")} />
                    <br />

                    <input type="submit" />
               </form>
          </div>
     );
};

export default ReviewUser;