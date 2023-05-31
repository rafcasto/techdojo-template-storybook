import React from 'react';
import './InputField.css';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="number"
      className="input-field"
      placeholder="Enter your income"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export {};
