import React, { useState } from 'react';
// import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const details = { total: 0, next: null, operation: null };
  const [state, setState] = useState(details);

  const buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };
  const { total, next, operation } = state;

  return (
    <>
      <div className="calculator__wrapper">
        <h2>Let`s do some maths</h2>
        <div className="calculator">
          <div className="results">
            {total}
            {operation}
            {next}
          </div>

          <div className="mathOperations">
            <button type="button" onClick={buttonClicked}>
              AC
            </button>
            <button type="button" onClick={buttonClicked}>
              +/-
            </button>
            <button type="button" onClick={buttonClicked}>
              %
            </button>
            <button
              type="button"
              className="mathsSymbol"
              onClick={buttonClicked}
            >
              &#247;
            </button>
            <button type="button" onClick={buttonClicked}>
              7
            </button>
            <button type="button" onClick={buttonClicked}>
              8
            </button>
            <button type="button" onClick={buttonClicked}>
              9
            </button>
            <button
              type="button"
              className="mathsSymbol"
              onClick={buttonClicked}
            >
              x
            </button>
            <button type="button" onClick={buttonClicked}>
              4
            </button>
            <button type="button" onClick={buttonClicked}>
              5
            </button>
            <button type="button" onClick={buttonClicked}>
              6
            </button>
            <button
              type="button"
              className="mathsSymbol"
              onClick={buttonClicked}
            >
              -
            </button>
            <button type="button" onClick={buttonClicked}>
              1
            </button>
            <button type="button" onClick={buttonClicked}>
              2
            </button>
            <button type="button" onClick={buttonClicked}>
              3
            </button>
            <button
              type="button"
              className="mathsSymbol"
              onClick={buttonClicked}
            >
              +
            </button>
            <button type="button" className="zero" onClick={buttonClicked}>
              0
            </button>
            <button type="button" onClick={buttonClicked}>
              .
            </button>
            <button
              type="button"
              className="mathsSymbol"
              onClick={buttonClicked}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
