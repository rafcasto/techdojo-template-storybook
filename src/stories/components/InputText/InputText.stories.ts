import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from './InputText';

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
export const standardInputText: Story = {
  args: {
    id:"income",   
    label: 'Income',    
  },
};

export const filledInputText: Story = {
  args: {
    id:"income",    
    label: 'Income',    
    variant:'filled'
  },
};


export const outlinedInputText: Story = {
  args: {
    id:"income",    
    label: 'Income',
    variant:'outlined'    
  },
};

export const outlinedInputTextFullWidth: Story = {
  args: {
    id:"income",    
    label: 'Income',
    variant:'outlined',
    fullwidth:true
  },
};