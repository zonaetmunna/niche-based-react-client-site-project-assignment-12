import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageAllOrders = () => {

     const [products, setProducts] = useState([])
     useEffect(() => {
          const url = 'https://young-depths-90342.herokuapp.com/orders';
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setProducts(data);
                    console.log(data);
               })
     }, [])

     return (
          <div>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>Products name</TableCell>
                                   <TableCell align="right">Calories</TableCell>
                                   <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                   <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                   <TableCell align="right">Protein&nbsp;(g)</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {products.map((row) => (
                                   <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                   >
                                        <TableCell component="th" scope="row">
                                             {row.productName}
                                        </TableCell>
                                        <TableCell align="right">{row.productPrice}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>

                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </div>
     );
};

export default ManageAllOrders;