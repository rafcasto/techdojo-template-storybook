import type { Meta, StoryObj } from '@storybook/react';

import { Inputincome } from './inputIncome';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Tax/Input Income',
  component: Inputincome,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Inputincome>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputField: Story = {
  args: {

    labelinput: 'Input Income : ',
  },

};



