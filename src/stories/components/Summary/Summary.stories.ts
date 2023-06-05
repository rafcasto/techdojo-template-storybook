import type { Meta, StoryObj } from '@storybook/react';

import { Summary } from './Summary';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TaxCalculator/Summary',
  component: Summary,
  tags: ['autodocs']
} satisfies Meta<typeof Summary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sum: Story= {
    args:{
        taxDetails:{
          tax:15.0,
          total:1000.89
        }
    }
}