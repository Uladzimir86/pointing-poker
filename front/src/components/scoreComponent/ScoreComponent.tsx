import React from 'react'
import { useSelector } from 'react-redux'
import { IPlayerCard, IStore } from '../../common/interfaces'
import PlayerCard from '../../UI-components/player-card/player-card'

const ScoreComponent: React.FC = () => {
  const arrPlayers: IPlayerCard[] = useSelector(
    (state: IStore) => state.playerCards.playerCards
  )
  

  const player = arrPlayers.map((item, index) => {
    return (
      <div key= {index} className="score_players">
        <div className="score_players__points">10SP</div>
        <div className="score_players__member">
          <PlayerCard
            key={index}
            photo={item.photo}
            name={item.name}
            position={item.position}
            id={index}
          />
        </div>
      </div>
    )
  })
  return (
    <div className="score">
      <div className="score_titles">
        <span>Score:</span>
        <span>Players:</span>
      </div>
      {player}
      <div className="score_players">
        <div className="score_players__points">In Progress</div>
        <div className="score_players__member">
          <PlayerCard />
        </div>
      </div>
    </div>
  )
}

export default ScoreComponent
