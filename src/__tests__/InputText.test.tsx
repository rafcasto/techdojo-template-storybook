import React from 'react';
import { render, screen } from '@testing-library/react';
import {InputText} from '../stories/components/InputText/InputText'

describe('InputText', () => {
    test('renders input element with correct label and value', () => {
      const label = 'Test Label';
      const id = 'testId';
      const value = 'Test Value';
      render(<InputText label={label} id={id} value={value}  />);
      const labelElement = screen.getByText(`${label}`);
      expect(labelElement).toBeInTheDocument();      
    });
  });