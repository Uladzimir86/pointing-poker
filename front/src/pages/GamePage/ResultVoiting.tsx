import React from 'react'
import { useSelector } from 'react-redux'
import {
  IStatiscicsCard,
  IStatiscicsRound,
  IStore,
} from '../../common/interfaces'
import StatiscicCard from '../../UI-components/custom-card/statistic-card'
import { RootState } from '../../redux/reducers'


export const ResultVoiting: React.FC = () => {
  const showStatRound: boolean = useSelector(
    (state: RootState) => state.game.statGame.showStatRound
  )
  const arrOfResultsRound: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )
  const idCurrentIssue: string = useSelector(
    (state: IStore) => state.game.idCurrentIssue
  )
  let currentResultRound = arrOfResultsRound.filter(
    (item) => item.idIssue === idCurrentIssue
    )
    const cardStorage: string[] = useSelector(
      (state: IStore) => state.settings.cardStorage
    )
  let resultRound: IStatiscicsCard[] = cardStorage
    .map((item, index) => ({
      valueCard: item,
      percent:
        arrOfResultsRound[arrOfResultsRound.length - 1].resultsVote[index],
    }))
    .sort(function (a, b) {
      return b.percent - a.percent
    })

  const result = resultRound.map((item) => (
    <div key={item.valueCard} className="statistics_cards-results_column">
      <div className="statistics_cards-results_column_card">
        {<StatiscicCard id={Number(item.valueCard)} values={item.valueCard}  />}
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
