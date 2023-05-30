import type { Meta, StoryObj } from '@storybook/react';

import { Button1 } from './ButtonIncome';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Tax/ButtonIncome', // create component folder
  component: Button1,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {},
  },
} satisfies Meta<typeof Button1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const CalButton: Story = {
  args: {
    size: 'large',
    btnlabel: 'Calculate',
  },
};

