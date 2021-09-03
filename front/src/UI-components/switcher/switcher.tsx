import React from 'react';
import './switcher.scss';

const Switcher = () => {
  return (
    <div className="switcher">
      <div className="slider-wrapper">
      {/* <input type="range"/> */}
  <input className="slider" type="range" min="0" max="1" step="1" />
</div>
    </div>
  )
}

export default Switcher;