import React from 'react'
import { useSelector } from 'react-redux'
import { JsxElement } from 'typescript'
import {
  IStatiscicsCard,
  IStatiscicsRound,
  IStore,
} from '../../common/interfaces'
import { RootState } from '../../store/reducers'
import StatiscicCard from '../../UI-components/custom-card/statistic-card'
import './ResultsPage.scss'

export const ResultsPage: React.FC = () => {
  const issueCard = useSelector((state: RootState) => state.issues.issueCard)
  const titleGame: string = useSelector((state: IStore) => state.settings.title)

  const statisticsGame: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )


  const cardStorage: string[] = useSelector(
    (state: IStore) => state.settings.cardStorage
  )
  let round: any[] = cardStorage
    .map((item, index) => ({
      valueCard: item,
      percent: statisticsGame[statisticsGame.length - 1].resultRound[index],
    }))
    .sort(function (a: any, b: any) {
      return b.percent - a.percent
    })
  console.log(round)  




  function sortIdArray(id: string): JSX.Element[] {
    
    const filterArray = statisticsGame.filter(({ idIssue }) => idIssue === id)
    console.log(filterArray,'filterArray')
    
      const filterArrayElement = filterArray[0].resultRound.sort(function (
        a: IStatiscicsCard,
        b: IStatiscicsCard
      ) {
        return b.percent - a.percent
      })
      return filterArrayElement.map(({ percent, valueCard }) => (
        <div key={valueCard} className="results_content__round_cards_card">
          {<StatiscicCard id={Number(valueCard)} values={valueCard} />}
          <div className="statistics_cards-results_column_percent">
            <h4>{percent}%</h4>
          </div>
        </div>
      ))
    
    
  }

  const results = issueCard.map(({ title, link, id }) => {
    return (
      <div key={id} className="results_content__round">
        <div className="results_content__round_issueTitle">
          <div className={`custom-issue`}>
            <div className="content-text">
              {title && (
                <a className="main-text" href={link}>
                  {title}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="results_content__round_cards">{sortIdArray(id!)}</div>
      </div>
    )
  })

  return (
    <div className="results">
      <div className="results_title">{titleGame}</div>
      <div className="results_content"> {results} </div>
    </div>
  )
}
