import React, { PureComponent } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  buttonClicked = (e) => {
    const buttonName = e.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  };

  render() {
    return <Buttons buttonClicked={this.buttonClicked} state={this.state} />;
  }
}
export default Calculator;
