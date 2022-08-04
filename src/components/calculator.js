import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="calcDiv">
          <button type="button" className="btn" value="AC">AC</button>
          <button type="button" className="btn" value="+/-">+/-</button>
          <button type="button" className="btn" value="%">%</button>
          <button type="button" className="btn btnaction" value="÷">÷</button>
          <button type="button" className="btn" value="7">7</button>
          <button type="button" className="btn" value="8">8</button>
          <button type="button" className="btn" value="9">9</button>
          <button type="button" className="btn btnaction" value="x">x</button>
          <button type="button" className="btn" value="4">4</button>
          <button type="button" className="btn" value="5">5</button>
          <button type="button" className="btn" value="6">6</button>
          <button type="button" className="btn btnaction" value="-">-</button>
          <button type="button" className="btn" value="1">1</button>
          <button type="button" className="btn" value="2">2</button>
          <button type="button" className="btn" value="3">3</button>
          <button type="button" className="btn btnaction" value="+">+</button>
          <button type="button" className="btnZero" value="0">0</button>
          <button type="button" className="btn" value=".">.</button>
          <button type="button" className="btn btnaction" value="=">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
