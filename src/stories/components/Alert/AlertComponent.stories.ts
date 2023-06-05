import type { Meta, StoryObj } from '@storybook/react';

import { AlertComponent } from './AlertComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TaxCalculator/AlertComponent',
  component: AlertComponent,
  tags: ['autodocs']
} satisfies Meta<typeof AlertComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const error: Story = {
    args: {
    severity:'error',
    message:'This is a test error'
    },
  };

  export const warring: Story = {
    args: {
    severity:'warning',
    message:'This is a test Warning'
    },
  };

  export const info: Story = {
    args: {
    severity:'info',
    message:'This is a test Info'
    },
  };

  export const success: Story = {
    args: {
    severity:'success',
    message:'This is a test success'
    },
  };