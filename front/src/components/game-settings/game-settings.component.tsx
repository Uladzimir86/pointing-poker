import React, { FC, useEffect, useState } from 'react'
import './game-settings.styles.scss'
import Switcher from '../../UI-components/switcher/switcher'
import CustomCard from '../../UI-components/custom-card/custom-card.component'

const GameSettings: FC = () => {
  const [scramMasterAsPlayer, setScramMasterAsPlayer] = useState(false)
  const [changingCardInRoundEnd, setChangingCardInRoundEnd] = useState(false)
  const [isTimerNeeded, setIsTimerNeeded] = useState(false)

  const [scoreType, setScoreType] = useState('')
  const [shortScoreType, setShortScoreType] = useState('')

  const [timerMinutes, setTimerMinutes] = useState(2)
  const [timerSeconds, setTimerSeconds] = useState(30)

  const [cardStorage, setCardStorage] = useState([1, 3, 5, 7, 9])

  const smartSecondsSetter = (seconds: number) => {
    if (seconds >= 0 && seconds <= 60) {
      setTimerSeconds(seconds)
    }
  }

  const smartMinutesSetter = (minutes: number) => {
    if (minutes >= 0 && minutes <= 60) {
      setTimerMinutes(minutes)
    }
  }

  useEffect(() => {
    const formInfo = {
      scramMasterAsPlayer,
      changingCardInRoundEnd,
      isTimerNeeded,
      scoreType,
      shortScoreType,
      timerMinutes,
      timerSeconds,
      cardStorage,
    }

    console.log(formInfo)
  })

  return (
    <div className="game-settings-wrapper">
      <form className="game-settings">
        <div className="main-text">
          <h2>Game settings: </h2>
        </div>
        <div className="setting">
          <span>Scram master as player: </span>
          <Switcher
            switcherOn={scramMasterAsPlayer}
            setSwitcherOn={setScramMasterAsPlayer}
          />
        </div>
        <div className="setting">
          <span>Changing card in round end: </span>
          <Switcher
            switcherOn={changingCardInRoundEnd}
            setSwitcherOn={setChangingCardInRoundEnd}
          />
        </div>
        <div className="setting">
          <span>Is timer needed: </span>
          <Switcher
            switcherOn={isTimerNeeded}
            setSwitcherOn={setIsTimerNeeded}
          />
        </div>

        <div className="setting">
          <span>Score type:</span>
          <input
            onChange={(event) => setScoreType(event.target.value)}
            required
            type="text"
            className="inputElem"
          />
        </div>
        <div className="setting">
          <span>Score type (Short):</span>
          <input
            onChange={(event) => setShortScoreType(event.target.value)}
            required
            type="text"
            className="inputElem"
            minLength={1}
            maxLength={3}
          />
        </div>

        <div className="setting">
          <span>Round time: </span>
          <div className="timer-container">
            <div className="little-titles">
              <div>minutes</div>
              <div>seconds</div>
            </div>
            <div className="timer-numbers">
              <input
                className="timer-inputs"
                type="number"
                value={timerMinutes}
                onChange={(event) =>
                  smartMinutesSetter(Number(event.target.value))
                }
              />
              <div className="timer-separator">:</div>
              <input
                className="timer-inputs"
                type="number"
                value={timerSeconds}
                onChange={(event) =>
                  smartSecondsSetter(Number(event.target.value))
                }
              />
            </div>
          </div>
        </div>
        <div className="setting">
          <span>Add card values:</span>
        </div>
      </form>

      <div className="cards-container">
        <CustomCard
          setCardStorage={setCardStorage}
          cardStorage={cardStorage}
          coffee
        />
        {cardStorage.map((card) => (
          <CustomCard
            centerValue={shortScoreType}
            values={String(card)}
            setCardStorage={setCardStorage}
            cardStorage={cardStorage}
          />
        ))}
        <CustomCard
          setCardStorage={setCardStorage}
          cardStorage={cardStorage}
          addCard
        />
      </div>
    </div>
  )
}

export default GameSettings
