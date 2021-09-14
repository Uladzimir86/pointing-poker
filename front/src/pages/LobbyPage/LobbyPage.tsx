import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ModalType } from '../../common/interfaces'
import GameSettings from '../../components/game-settings/game-settings.component'
import Issues from '../../components/issues/issues'
import Members from '../../components/members/members'
import SessionTitle from '../../components/session-title/session-title'
import {IPlayer} from '../../store/reducers/player-cards-reduser/player-cards-reduser'
import { IStateGlobal } from '../../store/globalReducers'
import { CreateIssueModal } from '../../components/modalWindows/CreateIssueModal'
import { KickPlayerModal } from '../../components/modalWindows/KickPlayerModal'
import { ModalWindow } from '../../components/modalWindows/modalWindow'
import './LobbyPage.scss'

const LobbyPage: FC = () => {
  const typeModalWindow = useSelector(
    (state: IStateGlobal) => state.typeModalWindow
  )

  const arrOfMembers = useSelector(({set}:{set:IPlayer}) => set.playerCards)

  return (
    <div className="lobby-page">
      <SessionTitle />
      <Members arrOfMembers={arrOfMembers} />
      <Issues />
      <GameSettings />
      <ModalWindow>
        {typeModalWindow === ModalType.createIssueModalWindow ? (
          <CreateIssueModal />
        ) : (
          <KickPlayerModal />
        )}
      </ModalWindow>
    </div>
  )
}

export default LobbyPage
