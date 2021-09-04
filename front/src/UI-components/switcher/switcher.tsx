import { SyntheticEvent, useState } from 'react'
import './switcher.scss'

const Switcher = () => {
  const [switcherOn, setSwitcherOn] = useState(true)

  const handleSwitcher = (event: SyntheticEvent) => {
    setSwitcherOn(!switcherOn)
  }
  return (
    <input
      value={switcherOn ? '1' : '0'}
      className={`switcher ${switcherOn && 'switcher_on'}`}
      type="range"
      min="0"
      max="1"
      onClick={handleSwitcher}
    />
  )
}

export default Switcher
