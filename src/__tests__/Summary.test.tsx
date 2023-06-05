import React from 'react';
import { render, screen } from '@testing-library/react';
import {Summary} from '../stories/components/Summary/Summary'

describe('InputText', () => {
    test('renders input element with correct label and value', () => {
      const details = {
        tax:29.00,
        total:34000
    };
      render(<Summary taxDetails={
        details
      }  />);
      const labelElement = screen.getByText(`${details.tax}%`);
      expect(labelElement).toBeInTheDocument();      
    });
  });