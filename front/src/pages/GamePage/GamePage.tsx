import React, { useState } from 'react'
import { CustomIssueInterface, IStore, TypeUser } from '../../common/interfaces'
import ScoreComponent from '../../components/scoreComponent/ScoreComponent'
import { SettingsState } from '../../types/reducers/game-settings'
import { useDispatch, useSelector } from 'react-redux'
import { closeSession, restartRound, restartTimer, setRoundStart } from '../../api/api'
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
import { ChooseCard } from './ChooseCard'


export const GamePage: React.FC = () => {

  const issues : CustomIssueInterface[] = useSelector((state:IStore)=> state.issues.issueCard)
  const [stopTimer, onStopTimer] = useState<boolean>(true)

  const master = useSelector((state: RootState) => state.playerCards.playerCards[0])
  const currentPlayerId = useSelector((state: RootState) => state.playerCards.id)
  const cardStorage: string[] = useSelector(({ settings }: { settings: SettingsState }) => settings.cardStorage)
  const titleGame : string = useSelector((state:IStore)=> state.settings.title)
  const typeUser = useSelector((state: IStore) => state.globalSettings.typeUser)
  const isTimerActive = useSelector((state: RootState) => state.timer.startTimer)
  const startBtnText: string = useSelector((state: RootState) => state.timer.startBtnText);
  const currentIssue = useSelector((state: IStore) => state.game.idCurrentIssue);
  const centerCardValue = useSelector((state: RootState) => state.settings.shortScoreType);
  const showStatistic = useSelector((state: IStore) => state.game.statGame.showStatRound);

  function onHandlerStopGame(){
    dispatch({ type: 'SET_LOCATION', payload: '/results' })
  }

  const dispatch = useDispatch();
  const arrOfIssues = useSelector((state: RootState) => state.issues.issueCard);

  const issue = arrOfIssues.map(({ title, link, priority, id } ) => {
    return (
      <CustomIssue key={id} priority={priority} title={title} link={link}  id = {id}/>
    )
  })

  const handleRunRound = () => {
    if (startBtnText === 'Restart Round') {
      dispatch(restartRound);
      dispatch({ type: 'SHOW_STATISTICS', payload: false })
    }
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
                above={master.id === currentPlayerId}
              />
              {typeUser===TypeUser.master && <Button
                text={'Stop Game'}
                styleButton={'add'}
                onClick={onHandlerStopGame}
              />}
              {typeUser !== TypeUser.master && <Button
                text={'Exit'}
                styleButton={'add'}
                onClick={() => dispatch(closeSession)}
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
              <TimerElement stopTimer={stopTimer}/>
              {typeUser===TypeUser.master && <Button
                text={startBtnText}
                styleButton={'primary'}
                onClick={handleRunRound}
                disabled={isTimerActive}
              /> 
              }
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
            <div className="statistics_cards">
              <div className="statistics_cards-card">
                {cardStorage.map((card, index) => {
                  if (index) {
                    return ( 
                      <CustomCardGame
                        key={index}
                        centerValue={centerCardValue}
                        values={String(card)}
                        id={index}
                        isBtns={true}
                      />
                    )
                  } else return (
                    <CustomCardGame
                    key={index}
                    coffee
                    values={String(card)}
                    id={index}
                    isBtns={true}
                  />
                  )
                })}
              </div>
              <div className="statistics_cards-percent"></div>
            </div>
          </div>}
          {typeUser===TypeUser.member&&   
           <ChooseCard/>
           }
         
        {showStatistic&& 
          <ResultVoiting/> }
        </div>
        <ScoreComponent />
      </div>
    </div>
  )
}
