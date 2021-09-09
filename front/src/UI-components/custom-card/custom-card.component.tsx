import { FC, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './custom-card.styles.scss'
import {SettingsState} from '../../types/reducers/game-settings'
import {SettingsActionTypes} from '../../types/reducers/game-settings'
import deleteIcon from '../../assets/icons/delete-card-icon.png'
import editIcon from '../../assets/icons/edit-card-icon.png'

interface CustomCardPropsInterface {
  values?: string
  centerValue?: string
  coffee?: boolean
  addCard?: boolean
  //setCardStorage: React.Dispatch<SetStateAction<number[]>>
  //cardStorage: number[]
  isBtns?: boolean
  inGameSelected?: boolean
}

const CustomCard: FC<CustomCardPropsInterface> = ({
  values,
  centerValue,
  coffee,
  addCard,
  isBtns,
  //setCardStorage,
  //cardStorage,
  inGameSelected,
}) => {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch();
  const cardStorage: number[] = useSelector(({settings}: {settings: SettingsState})=>settings.cardStorage)
  const handleClick = () => {
    if (inGameSelected) {
      if (!addCard) {
        setSelected((prev) => !prev)
      }
    }
  }

  const handleAddCard = () => {
    cardStorage.push(0);
    dispatch({
      type: SettingsActionTypes.UPDATE_CARDSTORAGE,
      payload: cardStorage,
    })
    // if (addCard) {
    //   setCardStorage([...cardStorage, nextCard])
    // }
  }

  const topAndBottomValues = coffee ? 'Coffee' : values

  return (
    <div
      className={`custom-card ${selected ? 'selected-card' : ''}`}
      onClick={handleClick}
    >
      <div className="custom-card__head" >
        <div className="upper-value">{topAndBottomValues}</div>
        {!isBtns && <div className="custom-card__btns-container" >
          <div>
            <img src={deleteIcon} alt="Delete" className="delete-button delete-button_custom-card " />
          </div>
          <div>
            <img src={editIcon} alt="Edit" className="edit-button edit-button_custom-card" />
          </div>
        </div>}
      </div>

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
