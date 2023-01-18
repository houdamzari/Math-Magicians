import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import NavBar from './NavBar';

const Calculator = () => {
  const details = { total: 0, next: null, operation: null };
  const [state, setState] = useState(details);

  const buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };

  return (
    <>
      <NavBar />
      <div className="calculator__wrapper">
        <h2>Let s do some maths</h2>
        <Buttons buttonClicked={buttonClicked} state={state} />
      </div>
    </>
  );
};

export default Calculator;
