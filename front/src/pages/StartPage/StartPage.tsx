import React from 'react'
import './StartPage.scss'
import cardsLogo from '../../assets/icons/cards_startPage.svg'
import line from '../../assets/icons/Line.svg'
import { Button } from '../../UI-components/Button/button'

const StartPage = () => {
  return (
      <div className = "wrapper_startPage">
    <div className="content_startPage">
      <div className="startPage_title">
        <div className="startPage_title-cards">
          <img src={cardsLogo} alt="cards" />
        </div>
        <div className="startPage_title-naming">
          <h2>Poker</h2>
{/*         <img src={line} alt="line" />
 */}
          <h2>Planning</h2>
        </div>
      </div>
      <div className="startPage_newGame">
        <span>
          <h3>Start your planning:</h3>
        </span>
        <div className = "startPage_newGame-fieldCreate">
            <label htmlFor="Start new game">Start new game:</label>
            <Button text={'Start new game'} styleButton={'primary'} />
        </div>
      </div>
      <div className="startPage_connect">
        <h3>OR:</h3>
        <div className = "startPage_connect-fieldCreate">
            <label htmlFor="connect">Connect to lobby by URL:</label>
            <div className = "startPage_connect-fieldCreate_inputbtn">
                <input className="inputElem" type="text"  />
                <Button text={'Connect'} styleButton={'primary'} />
            </div>
        </div>
      </div>
    </div>
      </div>

  )
}
export default StartPage
