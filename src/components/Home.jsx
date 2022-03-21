import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux'
import { loadFoods } from '../redux/actions'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Home() {
    let dispatch = useDispatch();

    const { users } = useSelector(state => state.data);

    console.log(users);
    useEffect(() => {
        dispatch(loadFoods())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className='add-user'>
            <Box sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/add-user'>
                    <Button variant="contained">Add Dish</Button>
                </Link>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Dish</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell style={{ width: 360 }} >Available Addons</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.data && users.data.map((item, index) => {
                            const { name, price, addons } = item;
                            return (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                                    <StyledTableCell>{name}</StyledTableCell>
                                    <StyledTableCell>{price}</StyledTableCell>
                                    <StyledTableCell>{addons}</StyledTableCell>
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
