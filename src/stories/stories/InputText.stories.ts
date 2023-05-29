import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '../../components/InputText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TaxCalculator/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultInputText: Story = {
  args: {
    id:"income",
    value:"100.00",
    label: 'Income',
  },
};