import React from 'react';
import './buttonIncome.css';

interface ButtonIncomeProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  btnlabel: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;



}

/**
 * Primary UI component for user interaction
 */
export const Button1 = ({
  primary = true,
  size = 'large',
  backgroundColor,
  btnlabel,
  ...props
}: ButtonIncomeProps) => {
  const mode = primary ? 'storybook-buttonIncome--primary' : 'storybook-buttonIncome--secondary';
  return (
    <button
      type="submit"
      className={['storybook-buttonIncome', `storybook-buttonIncome--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {btnlabel}
    </button>
  );
};
