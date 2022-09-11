import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function Star() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    
    return(
        <Rating value={value} max={1} onChange={handleChange} />
    )
}