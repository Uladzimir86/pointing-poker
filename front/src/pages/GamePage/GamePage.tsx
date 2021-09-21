import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoundStart } from '../../api/api'
import { IPlayer, IStore, TypeUser } from '../../common/interfaces'
import ScoreComponent from '../../components/scoreComponent/ScoreComponent'
import { RootState } from '../../store/reducers'
import { arrOfIssues } from '../../store/reducers/issuesReducer/issueReducer'
import { AppThunk, SettingsState } from '../../types/reducers/game-settings'
import { Button } from '../../UI-components/Button/button'
import CustomCard from '../../UI-components/custom-card/custom-card.component'
import CustomCardGame from '../../UI-components/custom-card/CustomCardGame'
import CustomIssue from '../../UI-components/custom-issue/custom-issue.component'
import PlayerCard from '../../UI-components/player-card/player-card'
import { TimerElement } from '../../UI-components/timer/timer'
import { onShiftTimer } from './gameFunc'
import './GamePage.scss'
import { ResultVoiting } from './ResultVoiting'



const idCoffee : number = 98

export const GamePage: React.FC = () => {

  const timeRound = 2

  const [isActive, setIsActive] = useState<boolean>(false)
  const [stopTimer, onStopTimer] = useState<boolean>(true)

  const master = useSelector((state: RootState) => state.playerCards.playerCards[0])
  const cardStorage: string[] = useSelector(({ settings }: { settings: SettingsState }) => settings.cardStorage)
  const titleGame : string = useSelector((state:IStore)=> state.settings.title)
  const typeUser = useSelector((state: IStore) => state.globalSettings.typeUser)

  const dispatch = useDispatch();

  const issue = arrOfIssues.map(({ title, link, priority }) => {
    return (
      <CustomIssue key={title} priority={priority} title={title} link={link} />
    )
  })

  return (
    <div className="wrapper_game">
      <div className="game">
        <div className="game_field">
          <div className="game_field__title">
            <div className="game_field__title-text">
                {titleGame}
            </div>
          </div>
          <div className="game_field__scram">
            <div className="game_field__scram_title">Scrum master:</div>
            <div className="game_field__scram_main">
              <PlayerCard
                photo={master.photo}
                name={master.name}
                position={master.position}
                btnDelPlayer={false}
                above={true}
              />
              <Button
                text={'Stop Game'}
                styleButton={'add'}
                onClick={onShiftTimer(0)}
              />
            </div>
          </div>
          <div className="game_field__playArea">
            <div className="game_field__playArea_issues">
              <div className="game_field__playArea_issues-title">Issues:</div>
              <div className="game_field__playArea_issues-list">
                {issue}
                <CustomIssue link={''} title={''} priority={'Low'} />
              </div>
            </div>
            <div id="timer" className="game_field__playArea_timer">
              <TimerElement minutes={timeRound} stopTimer={stopTimer}/>
              <Button
                text={'Run Round'}
                styleButton={'primary'}
                onClick={() => dispatch(setRoundStart)}
              />
            </div>

            <div className="game_field__playArea_nextIssue">
              <Button
                text={'Next Issue'}
                styleButton={'primary'}
                onClick={onShiftTimer(issue.length)}
              />
            </div>
          </div>
          {typeUser===TypeUser.master&&    <div className="statistics">
            <div className="statistics_title">Statistics:</div>
            <div className="statistics_cards">
              <div className="statistics_cards-card">
                {cardStorage.map((card, index) => (
                  <CustomCard
                    key={index}
                    centerValue={'SP'}
                    values={String(card)}
                    id={index}
                    isBtns={true}
                  />
                ))}
              </div>
              <div className="statistics_cards-percent"></div>
            </div>
          </div>}
          {typeUser===TypeUser.member&&   
           <div className="statistics">
            <div className="statistics_title"></div>
            <div className="statistics_cards">
              <div className="statistics_cards-card">
                <CustomCardGame inGameSelected coffee id={idCoffee}/>
                {cardStorage.map((card, index) => {
                  if (index) {
                    return(
                      <CustomCardGame id = {index} key={index}
                      inGameSelected
                    />
                  )}
                })
                }
              </div>
            </div>
          </div>}
          <ResultVoiting/>
        </div>
        <ScoreComponent />
      </div>
    </div>
  )
}
