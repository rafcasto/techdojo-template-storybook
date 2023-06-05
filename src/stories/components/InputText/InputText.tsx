import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputTextProps {
    label: string;
    id:string;
    fullwidth?:boolean;
    value?:string;
    variant?:'outlined' | 'filled' | 'standard';
}

export const InputText = ({
    label,
    id,
    value,
    fullwidth,
    variant = 'standard',
    ...props
}:InputTextProps) => {
    return (                
            <TextField id={id} label={label} value={value} variant={variant} fullWidth={fullwidth} />        
    )
}


