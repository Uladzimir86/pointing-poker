import React from 'react'
import { useSelector } from 'react-redux'
import {
  IStatiscicsCard,
  IStatiscicsRound,
  IStore,
} from '../../common/interfaces'
import StatiscicCard from '../../UI-components/custom-card/statistic-card'
import { RootState } from '../../store/reducers'

export const ResultVoiting: React.FC = () => {
  const showStatRound: boolean = useSelector(
    (state: RootState) => state.game.statGame.showStatRound
  )
  const stateGameResults: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )
  const cardStorage: string[] = useSelector(
    (state: IStore) => state.settings.cardStorage
  )
  let round: any[] = cardStorage
    .map((item, index) => ({
      valueCard: item,
      percent: stateGameResults[stateGameResults.length - 1].resultRound[index],
    }))
    .sort(function (a: any, b: any) {
      return b.percent - a.percent
    })
  console.log(round)

  
  const result = round.map((item) => (
    <div
      key={item.valueCard}
      className="statistics_cards-results_column"
      hidden={item.percent ? false : true}
    >
      <div className="statistics_cards-results_column_card">
        {<StatiscicCard id={Number(item.valueCard)} values={item.valueCard} />}
      </div>
      <div className="statistics_cards-results_column_percent">
        <h4>{item.percent}%</h4>
      </div>
    </div>
  ))

  return (
    <>
      {showStatRound ? (
        <>
          <div className="statistics_title">Statistics:</div>
          <div className="statistics_cards-results">{result}</div>
        </>
      ) : null}
    </>
  )
}
