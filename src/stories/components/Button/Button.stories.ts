import type { Meta, StoryObj } from '@storybook/react';

import { CalculateButton } from './CalculateButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TaxCalculator/CalculateButton',
  component: CalculateButton,
  tags: ['autodocs']
} satisfies Meta<typeof CalculateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    fullWidth:true,
    label: 'Button',
    backgroundColor:'primary',

  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor:'secondary'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
