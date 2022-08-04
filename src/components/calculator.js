import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(event) {
    const targetValue = event.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, targetValue));
  }

  render() {
    const { total, operation, next } = this.state;
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
          <button onClick={this.handleClicks} type="button" className="btn" value="AC">AC</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="+/-">+/-</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="%">%</button>
          <button onClick={this.handleClicks} type="button" className="btn btnaction" value="÷">÷</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="7">7</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="8">8</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="9">9</button>
          <button onClick={this.handleClicks} type="button" className="btn btnaction" value="x">x</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="4">4</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="5">5</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="6">6</button>
          <button onClick={this.handleClicks} type="button" className="btn btnaction" value="-">-</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="1">1</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="2">2</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="3">3</button>
          <button onClick={this.handleClicks} type="button" className="btn btnaction" value="+">+</button>
          <button onClick={this.handleClicks} type="button" className="btnZero" value="0">0</button>
          <button onClick={this.handleClicks} type="button" className="btn" value=".">.</button>
          <button onClick={this.handleClicks} type="button" className="btn btnaction" value="=">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
