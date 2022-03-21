import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFood } from '../redux/actions'

export default function AddUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = useState({
        name: "",
        price: "",
        addons: ""
    })

    const { name, price, addons } = inputVal;
    const handleChange = (e) => {
        let { name, value } = e.target;
        setInputVal({ ...inputVal, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !addons) {
            setInputVal("fill the data");

        } else {
            dispatch(addFood(inputVal));
            console.log(inputVal);
            navigate('/')
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{
            boxShadow: 2,
            borderRadius: 2, height: 250,
            backgroundColor: 'primary.danger',
            '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column",
        }}>
            <div>
                <TextField id="outlined-basic" label="Dish" variant="outlined" name="name" value={name} onChange={handleChange} />
                <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={price} onChange={handleChange} />
                <TextField id="outlined-basic" label="Available Addons" variant="outlined" name="addons" value={addons} onChange={handleChange} />
            </div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" type="submit">Add Dish</Button>
                <Button variant="contained" size="large" color='error' onClick={() => navigate('/')}>Back</Button>
            </Stack>
        </Box>
    )
}
