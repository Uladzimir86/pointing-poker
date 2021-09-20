import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IStore, TypeUser } from '../../common/interfaces'
import ScoreComponent from '../../components/scoreComponent/ScoreComponent'
import { arrOfIssues } from '../../store/reducers/issuesReducer/issueReducer'
import { SettingsState } from '../../types/reducers/game-settings'
import { Button } from '../../UI-components/Button/button'
import CustomCard from '../../UI-components/custom-card/custom-card.component'
import CustomCardGame from '../../UI-components/custom-card/CustomCardGame'
import CustomIssue from '../../UI-components/custom-issue/custom-issue.component'
import PlayerCard from '../../UI-components/player-card/player-card'
import { TimerElement } from '../../UI-components/timer/timer'
import { onShiftTimer } from './gameFunc'
import './GamePage.scss'
import { ResultVoiting } from './ResultVoiting'
import { createID } from '../../common/randomId'
import CreateIssueCard from '../../UI-components/custom-issue/CreateIssueCard'


const idCoffee : number = 98

export const GamePage: React.FC = () => {
  const timeRound = 2
  const [isActive, setIsActive] = useState<boolean>(false)
  const [stopTimer, onStopTimer] = useState<boolean>(true)
  const master = useSelector((set: IStore) => set.playerCards.playerCards[0])
  const cardStorage: number[] = useSelector(
    ({ settings }: { settings: SettingsState }) => settings.cardStorage
  )
  const titleGame : string = useSelector((state:IStore)=> state.settings.title)

  const issue = arrOfIssues.map(({ title, link, priority, id }) => {
    return (
      <CustomIssue key={title} priority={priority} title={title} link={link} id={createID()}/>
    )
  })

  const typeUser = useSelector((state: IStore) => state.globalSettings.typeUser)

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
                onClick={onShiftTimer(0)}
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
              <TimerElement minutes={timeRound} isActive={isActive} setIsActive={setIsActive}  stopTimer={stopTimer}/>
              {typeUser===TypeUser.master && 
                <Button
                text={'Run Round'}
                styleButton={'primary'}
                onClick={()=>setIsActive(true)}
              />}
            </div>

            <div className="game_field__playArea_nextIssue">
            {typeUser===TypeUser.master &&  <Button
                text={'Next Issue'}
                styleButton={'primary'}
                onClick={onShiftTimer(issue.length)}
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
                    id={index}
                  />
                ))}
              </div>
              <div className="statistics_cards-percent">44%</div>
            </div>
          </div>}
          {typeUser===TypeUser.member&&   
           <div className="statistics">
            <div className="statistics_title"></div>
            <div className="statistics_cards">
              <div className="statistics_cards-card">
                {cardStorage.map((card, index) => (
                  <CustomCardGame id = {index} key={index}
                    inGameSelected
                  />
                ))
                }
                <CustomCardGame inGameSelected coffee id={idCoffee}/>
              </div>
            </div>
          </div>}
          {typeUser===TypeUser.master&& 
          <ResultVoiting/>}
        </div>
        <ScoreComponent />
      </div>
    </div>
  )
}
