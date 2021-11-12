import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {

     const [email, setEmail] = useState('')
     const { token } = useAuth();

     const handleOnBlur = e => {
          setEmail(e.target.value);
     }

     const handleSubmit = e => {
          e.preventDefault();
          const user = { email }
          const url = `https://young-depths-90342.herokuapp.com/users/admin`;
          fetch(url, {
               method: 'PUT',
               headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         alert('make admin successfully')

                    }
                    console.log(data);
               })


     }

     return (
          <div>
               <Typography variant="h5">Make Admin</Typography>
               <form onSubmit={handleSubmit}>
                    <TextField
                         label="Standard"
                         variant="standard"
                         onBlur={handleOnBlur}
                    />

                    <Button type="submit" variant="contained">make admin</Button>
               </form>
          </div>
     );
};

export default MakeAdmin;