import { FC } from 'react'
import GameSettings from '../../components/game-settings/game-settings.component'
import Issues from '../../components/issues/issues'
import Members from '../../components/members/members'
import SessionTitle from '../../components/session-title/session-title'
import './lobby-page.styles.scss'
import { useSelector } from 'react-redux'
import {IPlayer} from '../../store/reducers/player-cards-reduser/player-cards-reduser'

const LobbyPage: FC = () => {

  const arrOfMembers = useSelector(({set}:{set:IPlayer}) => set.playerCards)

  const arrOfIssues = [
    {
      deleteButton: true,
      editButton: true,
      createButton: false,
      closeButton: false,
      currentCard: true,
      priority: 'medium',
      number: '14',
    },
    {
      deleteButton: true,
      editButton: true,
      createButton: false,
      closeButton: false,
      currentCard: false,
      priority: 'high',
      number: '06',
    },
  ]

const s = {width: '50px', height:'50px'}
  return (
    <div className="lobby-page">
      <SessionTitle />
      <Members arrOfMembers={arrOfMembers} />
      <Issues arrOfIssues={arrOfIssues} />
      <GameSettings />
      <button type="button"  style={s}/>
    </div>
  )
}

export default LobbyPage
