import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputField, InputFieldProps } from './InputField';

export default {
  title: 'TaxCalculator/InputField',
  component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter your income',
  type: 'number',
};
