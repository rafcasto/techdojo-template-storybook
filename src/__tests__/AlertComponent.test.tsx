import React from 'react';
import { render, screen } from '@testing-library/react';
import {AlertComponent} from '../stories/components/Alert/AlertComponent'

describe('AlertComponent', () => {
    test('renders input element with correct label and value', () => {
      const message = 'Test Label';

      render(<AlertComponent message={message}   />);
      const labelElement = screen.getByText(`${message}`);
      expect(labelElement).toBeInTheDocument();      
    });
  });