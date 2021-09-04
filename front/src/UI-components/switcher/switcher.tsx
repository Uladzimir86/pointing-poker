import { useState } from 'react';
import './switcher.scss';

const Switcher = () => {
  const [switcherOn, setSwitcherOn] = useState(true)
  const handleSwitcher = () => {
    setSwitcherOn(!switcherOn);
  }
  return <input className={`switcher ${switcherOn && 'switcher_on'}`} type="range" min="0" max="1" step="1" onChange={handleSwitcher}/>
}

export default Switcher;