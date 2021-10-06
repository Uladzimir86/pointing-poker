import React from 'react'
import {  useDispatch } from 'react-redux'
import './player-card.scss'
import {IPlayerCard} from '../../common/interfaces'
import { deletePlayerCard } from '../../api/api'

const PlayerCard: React.FC<IPlayerCard> = ({
  photo,
  name,
  position,
  btnDelPlayer = true,
  above = false,
  id
}) => {

/*   const ws = useSelector((state: RootState) => state.playerCards.ws)
 */  const dispatch = useDispatch();

  return (
    <div className="player-card">
      <div className="player-card__photo-container">
        <div className="player-card__photo">{photo}</div>
      </div>
      <div className="player-card__text-container">
        <div className="player-card__name-above" hidden={!above}>
          It's you
        </div>
        <div className="player-card__name">{name}</div>
        <div className="player-card__position">{position}</div>
      </div>
      <button
        type="button"
        className="player-card__button"
        onClick={() => dispatch(deletePlayerCard(id))}
        hidden={!btnDelPlayer}
      ></button>
    </div>
  )
}

export default PlayerCard
