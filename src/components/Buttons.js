/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.PureComponent {
  render() {
    const { state, buttonClicked } = this.props;
    const { total, next, operation } = state;
    return (
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
          <button type="button" className="mathsSymbol" onClick={buttonClicked}>
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
          <button type="button" className="mathsSymbol" onClick={buttonClicked}>
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
          <button type="button" className="mathsSymbol" onClick={buttonClicked}>
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
          <button type="button" className="mathsSymbol" onClick={buttonClicked}>
            +
          </button>
          <button type="button" className="zero" onClick={buttonClicked}>
            0
          </button>
          <button type="button" onClick={buttonClicked}>
            .
          </button>
          <button type="button" className="mathsSymbol" onClick={buttonClicked}>
            =
          </button>
        </div>
      </div>
    );
  }
}
Buttons.defaultProps = {
  total: 0,
  next: '',
  operation: '',
  buttonClicked: () => {},
};
Buttons.propTypes = {
  total: PropTypes.number,
  next: PropTypes.string,
  operation: PropTypes.string,
  buttonClicked: PropTypes.func,
};
export default Buttons;
