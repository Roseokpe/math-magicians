/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navBar';
import Quotes from './components/quote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<Quotes />} />
        <Route path="/topics" element={<calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
