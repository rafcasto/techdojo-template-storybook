import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export interface CalculateButtonProps {
  size?: 'small'|'medium'|'large';
  backgroundColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?:'text'|'contained'|'outlined'
  label: string;
  fullWidth?:boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CalculateButton = ({
  
  variant = 'text',
  size = 'small',
  fullWidth,
  backgroundColor,
  onClick,
  label,
  ...props
}: CalculateButtonProps) => {

  return (
    <Button variant={variant} color={backgroundColor} onClick={onClick} fullWidth={fullWidth} size={size}>{label}</Button>
  );
};
