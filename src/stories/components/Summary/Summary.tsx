import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {TaxDetailsModel} from '../../models/TaxDetailsModel'
interface SummaryProps {
    taxDetails:TaxDetailsModel
}

export const Summary  = ({
   taxDetails,
}:SummaryProps) => {
    return ( 
<Grid container spacing={2}>
        <Grid item xs={12}  >
           Total Tax to paid <Typography style={{fontSize:25}} variant="caption" >${taxDetails.total}</Typography>
           
        </Grid>
        <Grid item xs={12} >
        Your tax was calculated based on <Typography style={{fontSize:25}} variant="caption" >{taxDetails.tax}%</Typography>
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
        <Grid item xs={8}>
         
        </Grid>
      </Grid>

    )
}