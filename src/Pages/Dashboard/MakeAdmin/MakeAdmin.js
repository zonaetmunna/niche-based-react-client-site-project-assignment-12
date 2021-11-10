import { Button, TextField } from '@mui/material';
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
          const url = `http://localhost:5000/users/admin`;
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
                         setEmail('')
                    }
                    console.log(data);
               })


     }

     return (
          <div>
               <h1>this is makeAdmin</h1>
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