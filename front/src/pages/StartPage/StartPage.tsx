import React, { useEffect, useState } from 'react'
import './StartPage.scss'
import cardsLogo from '../../assets/icons/cards_startPage.svg'
import { Button } from '../../UI-components/Button/button'
import { ModalWindow } from './modalWindow'
import { CreateIssueModal } from '../../UI-components/modalWindows/CreateIssueModal'

const StartPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false)

  const onOpenModal = () => {
    setActiveModal(true)
    console.log('open', activeModal)
  }

  const onCloseModal = () => {
    setActiveModal(false)
    console.log('close')
  }

  useEffect(() => {
    if (activeModal) {
    }
  }, [activeModal])

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
              onClick={onOpenModal}
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
      <ModalWindow setActiveModal={setActiveModal} activeModal={activeModal}>
        <CreateIssueModal
          setActiveModal={setActiveModal}
          activeModal={activeModal}
        />
      </ModalWindow>
    </div>
  )
}
export default StartPage
