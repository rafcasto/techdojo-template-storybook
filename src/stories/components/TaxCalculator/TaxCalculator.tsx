import * as React from 'react';
import {AlertComponent} from '../Alert/AlertComponent'
import {CalculateButton} from '../Button/CalculateButton'
import {InputText} from '../InputText/InputText'
import {Summary} from '../Summary/Summary'
import {TaxDetailsModel} from '../../models/TaxDetailsModel'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
interface TaxCalculatorProps 
{
    taxDetails?:TaxDetailsModel; 
    hasError?:boolean;
    isSuccess?:boolean;
}

export const TaxCalculator  = ({
    taxDetails,
    hasError,
    isSuccess,
}:TaxCalculatorProps) => {
    return (
        <Container maxWidth='md'>
            
<Grid container spacing={3} >
<Grid item xs={12}  md={6} sm={12} lg={6} xl={6}>

    <InputText id='test' label='Income' fullwidth variant='standard'  />
  
    
</Grid>
<Grid item xs={12}  md={6} sm={12} lg={6} xl={6}>
<CalculateButton label='Calculate Tax' fullWidth variant='contained' backgroundColor='primary' size='large' />
</Grid>

<Grid item xs={12} >
        {hasError && <AlertComponent severity='error'  message='This is an error' />}
        {isSuccess && taxDetails && <Summary taxDetails={taxDetails} ></Summary>}
</Grid>


</Grid>
</Container>
    );
}