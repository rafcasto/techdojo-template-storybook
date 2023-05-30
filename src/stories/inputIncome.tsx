import React from 'react';
import './inputIncome.css';

interface InputProps {

  labelinput: String;

  /**
   * Optional click handler
   */

}

/**
 * Primary UI component for user interaction
 */
export const Inputincome = ({

  labelinput,
  ...props

}: InputProps) => {

  return (
    <div>

      <label className="label">{labelinput}</label>

      <input type="number" placeholder=" $ Enter your income" className="storybook-inputIncome" />

    </div>

  );
};
