import React from 'react';
import Dice from './images/icon-dice.svg';
import Divider1 from './images/pattern-divider-desktop.svg';
import Divider2 from './images/pattern-divider-mobile.svg';

function Advice({ advice, num, fetchData }) {
  return (
    <main>
      <small> advice #{num} </small>
      <div className="advice-container">
        <p className="advice"> &ldquo;{advice}&rdquo; </p>
      </div>
      <div className="divider-img">
        <img src={Divider2} alt="divider pattern" className="mobile-divider" />
        <img src={Divider1} alt="divider pattern" className="desk-divider" />
      </div>
      <button className="dice-btn" onClick={fetchData}>
        <img src={Dice} alt="dice" />
      </button>
    </main>
  );
}

export default Advice;
