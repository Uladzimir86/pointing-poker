import React from 'react'
import { useSelector } from 'react-redux'
import ScoreComponent from '../../components/scoreComponent/ScoreComponent'
import { arrOfIssues } from '../../store/reducers/issuesReducer/issueReducer'
import { IPlayer } from '../../store/reducers/player-cards-reduser/player-cards-reduser'
import { SettingsState } from '../../types/reducers/game-settings'
import { Button } from '../../UI-components/Button/button'
import CustomCard from '../../UI-components/custom-card/custom-card.component'
import CustomIssue from '../../UI-components/custom-issue/custom-issue.component'
import PlayerCard from '../../UI-components/player-card/player-card'
import { TimerElement } from '../../UI-components/timer/timer'
import './GamePage.scss'

export const GamePage: React.FC = () => {
  const muster = useSelector(({ set }: { set: IPlayer }) => set.playerCards[0])
  const cardStorage: number[] = useSelector(({settings}: {settings: SettingsState})=>settings.cardStorage)

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
              Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
            </div>
          </div>
          <div className="game_field__scram">
            <div className="game_field__scram_title">Scrum master:</div>
            <div className="game_field__scram_main">
              <PlayerCard
                photo={muster.photo}
                name={muster.name}
                position={muster.position}
                btnDelPlayer={false}
                above={true}
              />
              <Button text={'Stop Game'} styleButton={'add'} />
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
            <div className="game_field__playArea_timer">
              <TimerElement isActive={false} />
              <Button text={'Run Round'} styleButton={'primary'} />
            </div>

            <div className="game_field__playArea_nextIssue">
              <Button text={'Next Issue'} styleButton={'primary'} />
            </div>

          
          </div>

          <div className="statistics">
              <div className="statistics-title">Statistics:</div>
              <div className="statistics-cards">
                {cardStorage.map((card, index) => (
                  <CustomCard
                    key={index}
                    centerValue={"SP"}
                    values={String(card)}
                    id={index}
                  />
                ))}
              </div>
            </div>
        </div>
        <ScoreComponent/>
      </div>
    </div>
  )
}
