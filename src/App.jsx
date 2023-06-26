import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='header'>
      <h1 className='header-heading'>404 NOT FOUND</h1>
      </header>
      <main className='hero-section'>
        <img src={'scarecrow.png'} className='hero-img' id='hero-img' alt='Scarecrow'/>
        <div className='hero-content'>
          <h1 className='hero-heading'>I have bad news for you</h1>
          <p className='hero-text'>The page you are looking for might be removed or is temporarily unavailable.</p>
          <a href="index.html" className='hero-cta'>back to homepage</a>
        </div>
      </main>
      <div className='attribution'>
        Coded by <a href="https://github.com/jlvillegas04">Juan Villegas</a>
      </div>
    </div>
  );
}
export default App;