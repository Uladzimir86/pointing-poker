import React from 'react'
import { useSelector } from 'react-redux'
import { IResultCard, IStatiscicsRound, IStore } from '../../common/interfaces'
import { RootState } from '../../redux/reducers'
import StatiscicCard from '../../UI-components/custom-card/statistic-card'
import './ResultsPage.scss'

export const ResultsPage: React.FC = () => {
  const titleGame: string = useSelector((state: IStore) => state.settings.title)
  const arrOfIssues = useSelector((state: RootState) => state.issues.issueCard)

  const objResults: IResultCard[] = [
    {
      idIssue: '333',
      resultRound: [
        { percent: 21, valueCard: '2' },
        { percent: 22, valueCard: '5' },
        { percent: 23, valueCard: '6' },
      ],
    },
    {
      idIssue: '533',
      resultRound: [
        { percent: 27, valueCard: '23' },
        { percent: 28, valueCard: '53' },
        { percent: 26, valueCard: '63' },
      ],
    },
  ]

  const statisticsGame: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )
  const cardStorage: string[] = useSelector(
    (state: IStore) => state.settings.cardStorage
  )

  //const idList: string[] ;
  //const y = objResults.filter(({idIssue}) => idList.some(idIssue))
  const x = statisticsGame.filter(
    ({ idIssue }, index) => arrOfIssues[index].id === idIssue
  )

  function statisticsCards(index: number): JSX.Element[]{
    return objResults[index].resultRound.map((item) => (
      <div key={item.valueCard} className="results_content__round_cards_card">
        {<StatiscicCard id={Number(item.valueCard)} values={item.valueCard} />}
        <div className="statistics_cards-results_column_percent">
          <h4>{item.percent}%</h4>
        </div>
      </div>
    ))
  }

  const results = arrOfIssues.map(({ title, link, id }, index) => {
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
        <div className="results_content__round_cards">
          {statisticsCards(index)}
        </div>
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
