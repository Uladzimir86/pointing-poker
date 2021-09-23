import React from 'react'
import { useSelector } from 'react-redux'
import {
  CustomIssueInterface,
  IStatiscicsRound,
  IStore,
} from '../../common/interfaces'
import { SettingsState } from '../../types/reducers/game-settings'
import CustomCardGame from '../../UI-components/custom-card/CustomCardGame'

export const ResultVoiting: React.FC = () => {
  const showStatRound: boolean = useSelector(
    (state: IStore) => state.game.statGame.showStatRound
  )
  const arrOfVote: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )

  const cardStorage: number[] = useSelector(
    ({ settings }: { settings: SettingsState }) => settings.cardStorage
  )

  const resultRound = arrOfVote[arrOfVote.length - 1].resultsVote.map(
    (item, index) => (
      <div className="statistics_cards-percent_column">
        <div className="statistics_cards-percent_column_card">
          {<CustomCardGame isStatiscics={true} id={cardStorage[index - 1]} />}
        </div>
        <div key={index} className="statistics_cards-percent_column_item">
          {item}%
        </div>
      </div>
    )
  )

  return (
    <>
      {showStatRound ? (
        <>
          <div className="statistics_title">Statistics:</div>
          <div className="statistics_cards-percent">{resultRound}</div>
        </>
      ) : null}
    </>
  )
}
