import React from 'react'
import './StartPage.scss'
import cardsLogo from '../../assets/icons/cards_startPage.svg'
import { Button } from '../../UI-components/Button/button'
import { ModalWindow } from '../../components/modalWindows/modalWindow'
import { ConnectLobbyModal } from '../../components/modalWindows/ConnectLobbyModal'
import { useDispatch, useSelector } from 'react-redux'
import { setTypeUser, toggleModalWindow } from '../../store/reducers/globalReducer/globalActions'
import { IStateGlobal, IStore, TypeUser } from '../../common/interfaces'

const StartPage: React.FC = () => {
  const dispatch = useDispatch()
  const statusModalWindow: boolean = useSelector(
    (state: IStore) => state.globalSettings.modalWindow
  )
  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(toggleModalWindow(true))
    const clickButton = e.currentTarget as HTMLButtonElement
    if (clickButton.textContent === 'Start New Game') {
      dispatch(setTypeUser(TypeUser.master))
    }
    if (clickButton.textContent === 'Connect') {
      dispatch(setTypeUser(TypeUser.member))
    }
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
            <label htmlFor="Start new game">Create Session:</label>
            <Button
              text={'Start New Game'}
              styleButton={'primary'}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault()
                onOpenModal(event)
              }}
            />
          </div>
        </div>
        <div className="startPage_connect">
          <h3>OR:</h3>
          <div className="startPage_connect-fieldCreate">
            <label htmlFor="connect">Connect to lobby by URL:</label>
            <div className="startPage_connect-fieldCreate_inputbtn">
              <input className="inputElem" type="text" />
              <Button
                text={'Connect'}
                styleButton={'primary'}
                onClick={onOpenModal}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalWindow>{<ConnectLobbyModal />}</ModalWindow>
    </div>
  )
}
export default StartPage
