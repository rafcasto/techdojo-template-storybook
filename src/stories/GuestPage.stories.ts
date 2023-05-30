import type { Meta, StoryObj } from '@storybook/react';

// import type { Meta, StoryObj } from '@storybook/your-framework';


import { within, userEvent } from '@storybook/testing-library';

import { Button1 } from './ButtonIncome';
import { Inputincome } from './inputIncome';
import { GuestPage } from './GuestPage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Tax/GuestPage',
  component: GuestPage,

  tags: ['autodocs'],


  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  argTypes: {
    // backgroundColor: { control: 'color' },




  },
} satisfies Meta<typeof GuestPage>;





export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args



export const Guestpage: Story = {
  args: {
    labels: '',
    size: 'large',
    btnlabel: 'Calculate',

  },
};







// export const Submitted: Story = {

//   args: { // Provide the args property here
//     primary: true,
//     label: 'Button',
//   },
//   play: async ({ args, canvasElement, step }) => {
//     const canvas = within(canvasElement);

//     await step('Enter email and password', async () => {
//       await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
//       await userEvent.type(canvas.getByTestId('password'), 'supersecret');
//     });

//     await step('Submit form', async () => {
//       await userEvent.click(canvas.getByRole('button'));
//     });
//   }}

