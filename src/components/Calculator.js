import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const details = { total: 0, next: null, operation: null };
  const [state, setState] = useState(details);

  const buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };

  return <Buttons buttonClicked={buttonClicked} state={state} />;
};

export default Calculator;
