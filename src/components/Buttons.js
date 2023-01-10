import React from 'react';

class Buttons extends React.PureComponent {
  render() {
    return (
      <>
        <div className="results"> 0</div>

        <div className="mathOperations">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="mathsSymbol">
            &#247;
          </button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="mathsSymbol">
            x
          </button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="mathsSymbol">
            -
          </button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="mathsSymbol">
            +
          </button>
          <button type="button" className="zero">
            0
          </button>
          <button type="button">.</button>
          <button type="button" className="mathsSymbol">
            =
          </button>
        </div>
      </>
    );
  }
}
export default Buttons;
