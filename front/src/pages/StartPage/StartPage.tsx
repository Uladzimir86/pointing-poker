import './StartPage.scss'
import cardsLogo from '../../assets/icons/cards_startPage.svg'
import { Button } from '../../UI-components/Button/button'
import { ModalWindow } from '../../components/modalWindows/modalWindow'
import { ConnectLobbyModal } from '../../components/modalWindows/ConnectLobbyModal'
import { toggleModalWindow } from '../../store/actions'
import { useDispatch } from 'react-redux'
import {setSession} from '../../api/api'
import { useState } from 'react'

const StartPage: React.FC = () => {

  const [idSession, setIdSession] = useState('');
  const dispatch = useDispatch()

  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(toggleModalWindow(true))

  }

  return (
    <div className="wrapper_startPage">
      <div className="content_startPage">
        <div className="startPage_title">
          <div className="startPage_title-cards">
            <img src={cardsLogo} alt="cards" />
          </div>
          <div className="startPage_title-naming">
            <h2>Poker</h2>
            <h2>Planning</h2>
          </div>
        </div>
        <div className="startPage_newGame">
          <span>
            <h3>Start your planning:</h3>
          </span>
          <div className="startPage_newGame-fieldCreate">
            <label htmlFor="Start new game">Start new game:</label>
            <Button
              text={'Start new game'}
              styleButton={'primary'}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault()
                onOpenModal(event)
                dispatch(setSession())
              }}
            />
          </div>
        </div>
        <div className="startPage_connect">
          <h3>OR:</h3>
          <div className="startPage_connect-fieldCreate">
            <label htmlFor="connect">Connect to lobby by URL:</label>
            <div className="startPage_connect-fieldCreate_inputbtn">
              <input className="inputElem" type="text" value={idSession} onChange={(e) => setIdSession(e.target.value)}/>
              <Button
                text={'Connect'}
                styleButton={'primary'}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  if(idSession) {
                    dispatch(setSession(idSession))
                    onOpenModal(event)
                  } else setIdSession('enter ID for session')
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalWindow >
        {<ConnectLobbyModal />}
      </ModalWindow>
    </div>
  )
}
export default StartPage
