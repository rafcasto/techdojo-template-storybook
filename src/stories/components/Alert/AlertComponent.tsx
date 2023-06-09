import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface AlertComponentProps 
{
    severity?:'success' | 'info' | 'warning' | 'error',
    message: string
}

export const AlertComponent = (
    {
        severity,
        message,
    }:AlertComponentProps) => 
    {
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity}>{message}</Alert>
            </Stack>
        )
    }