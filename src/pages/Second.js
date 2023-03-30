import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Second() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Second page
        </p>
        <Link
          to='/'
          className="App-link"
          rel="noopener noreferrer"
        >
          Home Page
        </Link>
      </header>
    </div>
  )
}

export default Second