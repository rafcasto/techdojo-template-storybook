import React from 'react';
import './GuestPage.css';
import './inputIncome.css';
import './buttonIncome.css';
import { Inputincome, } from './inputIncome';
import { Button1 } from './ButtonIncome';
import { type } from 'os';
import { useRef } from 'react';

import { Button } from './Button';


interface guestProps {

  btnlabel: String;
  labels: String;
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;

  onCal: () => void;
  /**
   * Optional click handler
   */

}

/**
 * Primary UI component for user interaction
 */


export const GuestPage = ({

  primary = false,
  size,
  labels,
  btnlabel,
  onCal,
  ...props

}: guestProps) => {

  return (


    <><div className="container">

      <h1> Welcome to Tax calculator</h1>

      <h4> QA Angels</h4>

      <h3>Calculate Your Taxes with Ease and Accuracy</h3>

      <div className="centered-content">

        <div className="input-group">

          <label className="label">{labels}</label>
          
          <Inputincome labelinput="" />

        </div >

        <div className="Calbutton">

          <Button1 size="large" onClick={onCal} btnlabel="Calculate" />

        </div>

      </div>

      <div className='taxresult'>

        <div>

          <h2>
            "Your Tax summary display here"
          </h2>

        </div>

      </div>

    </div></>

  );
};

