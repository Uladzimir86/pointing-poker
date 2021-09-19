import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './custom-card.styles.scss'
import { SettingsState } from '../../types/reducers/game-settings'
import { setSelectedCard } from '../../store/reducers/gameReducer/gameActions'
import { ISelectedCard, IStore } from '../../common/interfaces'

interface CustomCardPropsInterface {
  values?: string
  centerValue?: string
  coffee?: boolean
  isBtns?: boolean
  id?: number 
  inGameSelected?: boolean
}

const CustomCardGame: FC<CustomCardPropsInterface> = ({
  values,
  coffee,
  isBtns,
  id,
  inGameSelected,
}) => {
  const dispatch = useDispatch()
  let elementCardStorage : number = 1;
  const selectedCard : ISelectedCard = useSelector((state:IStore)=> state.game.selectedCardVote)
  const topAndBottomValues = coffee ? 'Coffee' : elementCardStorage
  const cardStorage: number[] = useSelector(
    ({ settings }: { settings: SettingsState }) => settings.cardStorage
  )
  const shortScoreType : string = useSelector((state :IStore)=> state.settings.shortScoreType)
  if(id!==undefined){
    elementCardStorage = cardStorage[id]
  }
  const handleClick = () => {
    console.log(id)
    if(id!==undefined){
      dispatch(setSelectedCard({isSelected: !selectedCard.isSelected , idCard: id}))
    }
  }
  return (
    <div
      className={`custom-card ${(selectedCard.idCard===id /* && selectedCard.isSelected */)? 'selected-card' : ''}`}
      id={'custom-card-' + id}
      onClick={handleClick}
    >
      <div className="custom-card__head">
        <div className="upper-value">
          {topAndBottomValues}
        </div>
        {!isBtns && <div className="custom-card__btns-container"></div>}
      </div>
      <div className={`${coffee ? 'coffee' : 'center-value'}`}>
        {shortScoreType!==''? shortScoreType: coffee? "":'PP'}
      </div>
      <div className="lower-value" >
        {topAndBottomValues}
      </div>
      {(selectedCard.idCard===id /* && selectedCard.isSelected */) ? <div className="check-mark"></div> : null}
    </div>
  )
}

export default CustomCardGame
