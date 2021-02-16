import React from 'react';
import Button from './Button';
import './ButtonPannel.css';

export default function ButtonPanel() {
  return (

    <div className="main-div">
      <div>
        <Button name="AC" className="calc-number"/>
        <Button name="+/-" className="calc-number" />
        <Button name="%" className="calc-number" />
        <Button name="÷" className="orange-button" />
      </div>
      <div>
        <Button name="7" className="calc-number" />
        <Button name="8" className="calc-number" />
        <Button name="9" className="calc-number" />
        <Button name="X" className="orange-button" />
      </div>
      <div>
        <Button name="4" className="calc-number" />
        <Button name="5" className="calc-number" />
        <Button name="6" className="calc-number" />
        <Button name="-" className="orange-button" />
      </div>
      <div>
        <Button name="1" className="calc-number" />
        <Button name="2" className="calc-number" />
        <Button name="3" className="calc-number" />
        <Button name="+" className="orange-button" />
      </div>
      <div>
        <Button name="0" className="calc-number" />
        <Button name="." className="calc-number" />
        <Button name="=" className="orange-button" />
      </div>
    </div>
  );
}
