import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const InsertForm = ({slist}) => {
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.targe.value);
    };

    return (
        <Box>
            <FormControl>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                        >
                        종목명
                        </Typography>
                        <Select
                            value={name}
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                        >
                            {slist.map(item => (
                                <MenuItem key={item.no} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                        >
                        구매가격
                        </Typography>
                        <TextField
                        variant="outlined"
                        name={'text'}
                        type={'text'}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                        >
                        수량
                        </Typography>
                        <TextField
                        variant="outlined"
                        name={'text'}
                        type={'text'}
                        fullWidth
                        />
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    );
};

export default InsertForm;