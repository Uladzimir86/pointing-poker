import React from 'react';
import './player-card.scss';

export interface IPlayerCard {
  photo?: string
  name?: string
  position?: string
  btnDelPlayer?: boolean
  above?: boolean
}
const PlayerCard: React.FC<IPlayerCard> = ({
  photo = 'PH',
  name = 'Name',
  position = 'Position',
  btnDelPlayer = true,
  above = false,
}) => {
  const deletePlayerCard = () => {
    console.log('deletePlayerCard')
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
