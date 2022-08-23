/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quote';
import NavBar from './components/navBar';
import Home from './components/home';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
