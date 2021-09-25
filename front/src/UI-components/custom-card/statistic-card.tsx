import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ISelectedCard, IStore } from "../../common/interfaces"
import { setSelectedCard } from "../../store/reducers/gameReducer/gameActions"
import { SettingsState } from "../../types/reducers/game-settings"
import './statiscic-card.scss'
import coffeeImg from '../../assets/icons/coffee.png'

interface CustomCardPropsInterface {
    values: string
    centerValue?: string
    isBtns?: boolean
    id: string
    inGameSelected?: boolean
    isStatiscics?: boolean
  }
  const StatiscicCard: FC<CustomCardPropsInterface> = ({
    values,
    isBtns,
    id,
    isStatiscics
  }) => {
    console.log(values)
    const isCoffee : boolean = values==='Coffee'? true:false 
    const topAndBottomValues: string = values==='Coffee'? 'coffee':values
    const selectedCard: ISelectedCard = useSelector(
      (state: IStore) => state.game.selectedCardVote
    )
   /*  const cardStorage: string[] = useSelector(
      ({ settings }: { settings: SettingsState }) => settings.cardStorage
    ) */
  /*   if (id !== undefined) {
      let elementCardStorage: string = cardStorage[Number(id)]
      topAndBottomValues = coffee ? 'Coffee' : elementCardStorage
    } */
    const shortScoreType: string = useSelector(
      (state: IStore) => state.settings.shortScoreType
    )
   
        
    return (
      <div
        className={`custom-card ${
          selectedCard.idCard === id && !isStatiscics
            ? 'selected-card'
            : ''
        }`}
        id={'custom-card-' + id}
      >
        <div className="custom-card__head">
          <div className="upper-value">{topAndBottomValues}</div>
          {!isBtns && <div className="custom-card__btns-container"></div>}
        </div>
        <div className={`${values==='Coffee' ? 'coffee-stat' : 'center-value'}`}>
          {isCoffee? <img src={coffeeImg} alt='coffee'/> :shortScoreType !== '' ? shortScoreType : 'PP' }
          
        </div>
        <div className="lower-value">{topAndBottomValues}</div>
      </div>
    )
  }
  
  export default StatiscicCard
  