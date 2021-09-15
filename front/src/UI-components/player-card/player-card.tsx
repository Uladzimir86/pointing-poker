import React from 'react'
import { useSelector } from 'react-redux'
import './player-card.scss'
import {IPlayer} from '../../store/reducers/player-cards-reduser/player-cards-reduser'

export interface IPlayerCard {
  photo?: string
  name?: string
  position?: string
  btnDelPlayer?: boolean
  above?: boolean
  id?: number
}
const PlayerCard: React.FC<IPlayerCard> = ({
  photo,
  name,
  position,
  btnDelPlayer = true,
  above = false,
  id
}) => {

  const ws = useSelector(({set}:{set:IPlayer}) => set.ws)

  const deletePlayerCard = () => {
    ws?.send(JSON.stringify({type: 'DEL_PLAYER', id}));
  }

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
        onClick={deletePlayerCard}
        hidden={!btnDelPlayer}
      ></button>
    </div>
  )
}

export default PlayerCard
