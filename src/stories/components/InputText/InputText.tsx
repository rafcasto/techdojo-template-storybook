import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NumericFormat, NumericFormatProps } from 'react-number-format';



interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  
export interface InputTextProps {
    label: string;
    id:string;
    fullwidth?:boolean;
    value?:string;
    variant?:'outlined' | 'filled' | 'standard';
    handleInputChange?:  React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    name?: string;
}


const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
        decimalScale={2}
          {...other}
          getInputRef={ref}
          allowNegative={false}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );


  


export const InputText = ({
    label,
    id,
    value,
    fullwidth,
    variant = 'standard',
    handleInputChange,
    name,
    ...props
}:InputTextProps) => {

    return (                
            <TextField id={id} 
                label={label}
                InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                 value={value} onChange={handleInputChange} name="numberformat" variant={variant} fullWidth={fullwidth} />        
    );
}


