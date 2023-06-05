import React from 'react';
import { render, screen } from '@testing-library/react';
import {CalculateButton} from '../stories/components/Button/CalculateButton'

describe('CalculateButton', () => {
    test('renders input element with correct label and value', () => {
      const label = 'Test Label';

      render(<CalculateButton label={label}   />);
      const labelElement = screen.getByText(`${label}`);
      expect(labelElement).toBeInTheDocument();      
    });
  });