import { FC } from 'react'
import GameSettings from '../../components/game-settings/game-settings.component'
import Issues from '../../components/issues/issues'
import Members from '../../components/members/members'
import SessionTitle from '../../components/session-title/session-title'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './lobby-page.styles.scss'

const LobbyPage: FC = () => {
  const state = useTypedSelector((state) => state.settings)
  console.log(state, '<------ Current State')

  const arrOfMembers = [
    {
      photo: 'JM',
      name: 'Jorge Masvidal',
      position: 'Vodonos',
      btnDelPlayer: true,
      above: true,
    },
    {
      photo: 'DP',
      name: 'Dendi Pudge',
      position: 'Midlaner',
      btnDelPlayer: false,
      above: false,
    },
  ]

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

  return (
    <div className="lobby-page">
      <SessionTitle />
      <Members arrOfMembers={arrOfMembers} />
      <Issues arrOfIssues={arrOfIssues} />
      <GameSettings />
    </div>
  )
}

export default LobbyPage
