import { FC, useState } from 'react'
import './custom-card.styles.scss'

interface CustomCardPropsInterface {
  values?: string
  centerValue?: string
  coffee?: boolean
  addCard?: boolean
}

const CustomCard: FC<CustomCardPropsInterface> = ({
  values,
  centerValue,
  coffee,
  addCard,
}) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if (!addCard) {
      setSelected((prev) => !prev)
    }
  }

  const topAndBottomValues = coffee ? 'Coffee' : values

  return (
    <div
      className={`custom-card ${selected ? 'selected-card' : ''}`}
      onClick={handleClick}
    >
      <div className="upper-value">{topAndBottomValues}</div>

      <div
        className={`${
          coffee ? 'coffee' : addCard ? 'add-card' : 'center-value'
        }`}
      >
        {centerValue}
      </div>

      <div className="lower-value">{topAndBottomValues}</div>

      {selected ? <div className="check-mark"></div> : null}
    </div>
  )
}

export default CustomCard
