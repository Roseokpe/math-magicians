import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initalState = {
    total: 0,
    next: '',
    operation: '',
  };
  const [state, setState] = useState(initalState);
  // [state, setState]
  const { total, operation, next } = state;

  const handleClicks = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <section>
      <div className="displayInputs">
        <p>
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </p>
      </div>
      <div className="calcDiv">
        <button onClick={handleClicks} type="button" className="btn" value="AC">AC</button>
        <button onClick={handleClicks} type="button" className="btn" value="+/-">+/-</button>
        <button onClick={handleClicks} type="button" className="btn" value="%">%</button>
        <button onClick={handleClicks} type="button" className="btn btnaction" value="÷">÷</button>
        <button onClick={handleClicks} type="button" className="btn" value="7">7</button>
        <button onClick={handleClicks} type="button" className="btn" value="8">8</button>
        <button onClick={handleClicks} type="button" className="btn" value="9">9</button>
        <button onClick={handleClicks} type="button" className="btn btnaction" value="x">x</button>
        <button onClick={handleClicks} type="button" className="btn" value="4">4</button>
        <button onClick={handleClicks} type="button" className="btn" value="5">5</button>
        <button onClick={handleClicks} type="button" className="btn" value="6">6</button>
        <button onClick={handleClicks} type="button" className="btn btnaction" value="-">-</button>
        <button onClick={handleClicks} type="button" className="btn" value="1">1</button>
        <button onClick={handleClicks} type="button" className="btn" value="2">2</button>
        <button onClick={handleClicks} type="button" className="btn" value="3">3</button>
        <button onClick={handleClicks} type="button" className="btn btnaction" value="+">+</button>
        <button onClick={handleClicks} type="button" className="btnZero" value="0">0</button>
        <button onClick={handleClicks} type="button" className="btn" value=".">.</button>
        <button onClick={handleClicks} type="button" className="btn btnaction" value="=">=</button>
      </div>
    </section>
  );
};
export default Calculator;