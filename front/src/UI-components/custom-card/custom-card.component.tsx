import { FC, SetStateAction, useState } from 'react'
import './custom-card.styles.scss'

interface CustomCardPropsInterface {
  values?: string
  centerValue?: string
  coffee?: boolean
  addCard?: boolean
  setCardStorage: React.Dispatch<SetStateAction<number[]>>
  cardStorage: number[]
  inGameSelected?: boolean
}

const CustomCard: FC<CustomCardPropsInterface> = ({
  values,
  centerValue,
  coffee,
  addCard,
  setCardStorage,
  cardStorage,
  inGameSelected,
}) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if (inGameSelected) {
      if (!addCard) {
        setSelected((prev) => !prev)
      }
    }
  }

  const handleAddCard = () => {
    const nextCard = Number(cardStorage[cardStorage.length - 1]) + 1
    if (addCard) {
      setCardStorage([...cardStorage, nextCard])
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
        onClick={handleAddCard}
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
