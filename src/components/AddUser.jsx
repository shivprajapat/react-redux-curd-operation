import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    const navigate = useNavigate();
    return (

        <Box
            sx={{
                boxShadow: 3,
                height: 300,
                backgroundColor: 'primary.white',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column"
            }}>
            <div>
                <TextField id="outlined-basic" label="Dish" variant="outlined" />
                <TextField id="outlined-basic" label="Price" variant="outlined" />
                <TextField id="outlined-basic" label="Available Addons" variant="outlined" />
            </div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large">Add Dish</Button>
                <Button variant="contained" size="large" onClick={() => navigate('/')}>Back</Button>
            </Stack>
        </Box>
    )
}
