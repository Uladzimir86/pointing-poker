import React from 'react';
import './player-card.scss';

const PlayerCard = () => {
  const foto = 'AS';
  const name = 'Egor Dilda';
  const position = 'junior developer';
  const btn = false;
  const above = false;
  const deletePlayerCard = () => {
    console.log('deletePlayerCard');
  }
  return (
    <div className="player-card">
      <div className="player-card__foto-container">
        <div className="player-card__foto">
          {foto}
        </div> 
      </div>
      <div className="player-card__text-container">
        <div className="player-card__name-above" hidden={above}>It's you</div>
        <div className="player-card__name">{name}</div>
        <div className="player-card__position">{position}</div>
      </div>
      <button type="button" className="player-card__button" onClick={deletePlayerCard} hidden={btn}></button>
    </div>
  )
}

export default PlayerCard;