import React, { useState } from 'react'
import { CustomIssueInterface, IStore, TypeUser } from '../../common/interfaces'
import ScoreComponent from '../../components/scoreComponent/ScoreComponent'
import { SettingsState } from '../../types/reducers/game-settings'
import { useDispatch, useSelector } from 'react-redux'
import { restartRound, restartTimer, setRoundStart } from '../../api/api'
import { RootState } from '../../store/reducers'
import { Button } from '../../UI-components/Button/button'
import CustomCardGame from '../../UI-components/custom-card/CustomCardGame'
import CustomIssue from '../../UI-components/custom-issue/custom-issue.component'
import PlayerCard from '../../UI-components/player-card/player-card'
import { TimerElement } from '../../UI-components/timer/timer'
import { onShiftTimer } from './gameFunc'
import './GamePage.scss'
import { ResultVoiting } from './ResultVoiting'
import CreateIssueCard from '../../UI-components/custom-issue/CreateIssueCard'


const idCoffee : string = '0'

export const GamePage: React.FC = () => {

  const timeRound = 2
  const issues : CustomIssueInterface[] = useSelector((state:IStore)=> state.issues.issueCard)
/* 

  const issue = issues.map(({ title, link, priority, id }) => {
    return (
      <CustomIssue key={title} priority={priority} title={title} link={link} id={id}/>
    )
  }) */

  const [stopTimer, onStopTimer] = useState<boolean>(true)

  const master = useSelector((state: RootState) => state.playerCards.playerCards[0])
  const cardStorage: string[] = useSelector(({ settings }: { settings: SettingsState }) => settings.cardStorage)
  const titleGame : string = useSelector((state:IStore)=> state.settings.title)
  const typeUser = useSelector((state: IStore) => state.globalSettings.typeUser)
  const isTimerActive = useSelector((state: RootState) => state.timer.startTimer)
  const startBtnText: string = useSelector((state: RootState) => state.timer.startBtnText);
  const currentIssue = useSelector((state: RootState) => state.game.idCurrentIssue);

  const dispatch = useDispatch();
  const arrOfIssues = useSelector((state: RootState) => state.issues.issueCard);

  const issue = arrOfIssues.map(({ title, link, priority, id } ) => {
    return (
      <CustomIssue key={id} priority={priority} title={title} link={link}  id = {id}/>
    )
  })

  const handleRunRound = () => {
    if (startBtnText === 'Restart Round') dispatch(restartRound);
    else dispatch(setRoundStart);
  }

  const handleShiftIssue = () => {
    onShiftTimer(issue.length)
    const index = arrOfIssues.findIndex(item => item.id === currentIssue)
    console.log(arrOfIssues)
    if (index < arrOfIssues.length - 1) {
      dispatch({type: 'CURRENT_ISSUE', payload: arrOfIssues[index + 1].id})
      dispatch({type: 'TOGGLE_START_BTN_TEXT', payload: 'Run Round'})
      dispatch(restartTimer)
    }
  }

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
              {typeUser===TypeUser.master && <Button
                text={'Stop Game'}
                styleButton={'add'}
                // onClick={onShiftTimer(0)}
              />}
              {typeUser===TypeUser.member && <Button
                text={'Exit'}
                styleButton={'add'}
                onClick={()=>alert('You leave on game')}
              />}
              
            </div>
          </div>
          <div className="game_field__playArea">
            <div className="game_field__playArea_issues">
              <div className="game_field__playArea_issues-title">Issues:</div>
              <div className="game_field__playArea_issues-list ">
                {issue}
                {typeUser===TypeUser.master && 
                <CreateIssueCard />}
              </div>
            </div>
            <div id="timer" className="game_field__playArea_timer">
              <TimerElement minutes={timeRound} stopTimer={stopTimer}/>
              <Button
                text={startBtnText}
                styleButton={'primary'}
                onClick={handleRunRound}
                disabled={isTimerActive}
              />
            </div>

            <div className="game_field__playArea_nextIssue">
            {typeUser===TypeUser.master && startBtnText === 'Restart Round' && <Button
                text={'Next Issue'}
                styleButton={'primary'}
                onClick={handleShiftIssue}
              />}
             
            </div>
          </div>
          {typeUser===TypeUser.master&&    <div className="statistics">
            <div className="statistics_title">Statistics:</div>
            <div className="statistics_cards">
              <div className="statistics_cards-card">
                {cardStorage.map((card, index) => (
                  <CustomCardGame
                    key={index}
                    centerValue={'SP'}
                    values={String(card)}
                    id={String(index)}
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
                      <CustomCardGame id = {String(index)} key={index}
                      inGameSelected
                    />
                  )}
                  return undefined;
                })
                }
              </div>
            </div>
          </div>}
          {typeUser===TypeUser.member&& 
          <ResultVoiting/>}
        </div>
        <ScoreComponent />
      </div>
    </div>
  )
}
