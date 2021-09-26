import React from 'react'
import { useSelector } from 'react-redux'
import { IPlayerCard, IStore } from '../../common/interfaces'
import { RootState } from '../../redux/reducers'
import PlayerCard from '../../UI-components/player-card/player-card'

const ScoreComponent: React.FC = () => {
  const arrPlayers: IPlayerCard[] = useSelector(
    (state: IStore) => state.playerCards.playerCards
  )
const checkedCards = useSelector((state: RootState) => state.score)
const arrOfCards = useSelector((state: RootState) => state.settings.cardStorage)
const centerOfCards = useSelector((state: RootState) => state.settings.shortScoreType)

const player = arrPlayers.map((item, index) => {
    const id = item.id;
    return (
      <div key= {id} className="score_players">
        <div className="score_players__points">{(checkedCards && id && checkedCards[id] && (arrOfCards[checkedCards[id]] + ' ' + centerOfCards)) ||  'UNKNOWN'}</div>
        <div className="score_players__member">
          <PlayerCard
            photo={item.photo}
            name={item.name}
            position={item.position}
            id={id}
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
      {/* <div className="score_players">
        <div className="score_players__points">In Progress</div>
        <div className="score_players__member">
          <PlayerCard />
        </div>
      </div> */}
    </div>
  )
}

export default ScoreComponent
