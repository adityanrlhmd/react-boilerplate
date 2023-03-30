import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          to='/second'
          className="App-link"
          rel="noopener noreferrer"
        >
          Second Page
        </Link>
      </header>
    </div>
  )
}

export default Home