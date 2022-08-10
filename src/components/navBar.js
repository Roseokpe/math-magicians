import React from "react";
import { Link } from 'react-router-dom';
import './navBar.css';

export default function NavBar() {
  return (
        <header className="nav">
            <h1 className="pagetitle">Math Magician</h1>
            <nav className="nav-link">
                <link to="/about">Quotes</link>
                <link to="/">Home</link>
                <link to="/calculator">calculator</link>
            </nav>
        </header>
    );

}