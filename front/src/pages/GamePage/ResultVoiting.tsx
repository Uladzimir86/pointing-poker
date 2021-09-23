import React from 'react'
import { useSelector } from 'react-redux'
import {
  CustomIssueInterface,
  IStatiscicsRound,
  IStore,
} from '../../common/interfaces'
import { RootState } from '../../store/reducers'
import { SettingsState } from '../../types/reducers/game-settings'
import CustomCardGame from '../../UI-components/custom-card/CustomCardGame'

export const ResultVoiting: React.FC = () => {
  const showStatRound: boolean = useSelector(
    (state: RootState) => state.game.statGame.showStatRound
  )
  const arrOfVote: IStatiscicsRound[] = useSelector(
    (state: IStore) => state.game.statGame.results
  )

  const cardStorage: string[] = useSelector(
    ({ settings }: { settings: SettingsState }) => settings.cardStorage
  )

  const resultRound = arrOfVote[arrOfVote.length - 1].resultsVote.map(
    (item: any, index: number) => (
      <div className="statistics_cards-percent_column">
        <div className="statistics_cards-percent_column_card">
          {<CustomCardGame isStatiscics={true} id={index} />}
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
