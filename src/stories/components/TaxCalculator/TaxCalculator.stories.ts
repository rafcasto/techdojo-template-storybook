import type { Meta, StoryObj } from '@storybook/react';

import { TaxCalculator } from './TaxCalculator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'TaxCalculator/TaxCalculator',
  component: TaxCalculator,
  tags: ['autodocs']
} satisfies Meta<typeof TaxCalculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaxCalculatorDefault:Story ={
    args:{
        
    }
}

export const TaxCalculatorHasError:Story ={
    args:{
        hasError:true
    }
}



export const TaxCalculatorIsSuccessfull:Story ={
    args:{
        isSuccess:true,
        taxDetails:{
            tax:10.50,
            total:12000.44
        }
    }
}