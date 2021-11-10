import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

     const [orders, setOrders] = useState([]);
     const { user } = useAuth();
     useEffect(() => {
          const url = `http://localhost:5000/orders?email=${user.email}`;
          console.log(url);
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setOrders(data);
               })
     }, [])

     return (
          <div>
               <h1>my orders{orders.length}</h1>
               <Container>
                    <TableContainer component={Paper}>
                         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                              <TableHead>
                                   <TableRow>
                                        <TableCell>user name</TableCell>
                                        <TableCell align="right"> user email</TableCell>
                                        <TableCell align="right">service name</TableCell>
                                        <TableCell align="right">action</TableCell>

                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {orders.map((row) => (
                                        <TableRow
                                             key={row._id}
                                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                             <TableCell component="th" scope="row">
                                                  {row.name}
                                             </TableCell>
                                             <TableCell align="right">{row.email}</TableCell>
                                             <TableCell align="right">{row.productName}</TableCell>
                                             <TableCell align="right">action</TableCell>

                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>
               </Container>
          </div>
     );
};

export default MyOrders;