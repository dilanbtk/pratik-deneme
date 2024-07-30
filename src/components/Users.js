import React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((e) => console.error(e.message))
            .finally(() => setIsLoading(false));

    }, []);


    return (
       
            {/* {isLoading && <div>loding...</div>}
            {users.map((users) => (
                <div key={users.id}>{users.id}{users.name}</div>
            ))} <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="left"
                            style={{
                                backgroundColor: 'salmon'
                            }}
                            >Name</TableCell>
                            <TableCell align="left">Username</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Address</TableCell>
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{user.id}</TableCell>

                                <TableCell component="th" scope="row">
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Website</TableCell>
                            <TableCell align="left">Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                    {user.name}
                                </TableCell>
                                <TableCell align="left"   style={{
                                backgroundColor: 'salmon',
                                 color: user.username == 'Bret' && "red"

                            }}>{user.username}</TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left">{user.address.street}<br></br>{user.address.suite}<br></br>{user.address.city}<br></br>{user.address.zipcode}<br></br>{user.address.geo.lat}</TableCell>
                                <TableCell align="left">{user.phone}</TableCell>
                                <TableCell align="left">{user.website}</TableCell>
                                <TableCell align="left">{user.company.name}<br></br>{user.company.catchPhrase}<br></br>{user.company.bs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>




    ) */}
    )
}








export default Users;
