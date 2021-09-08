import React, { FC, useEffect, useState } from 'react'
import './game-settings.styles.scss'
import Switcher from '../../UI-components/switcher/switcher'
import CustomCard from '../../UI-components/custom-card/custom-card.component'
import { useDispatch } from 'react-redux'

const GameSettings: FC = () => {
  const [scramMasterAsPlayer, setScramMasterAsPlayer] = useState(false)
  const [changingCardInRoundEnd, setChangingCardInRoundEnd] = useState(false)
  const [isTimerNeeded, setIsTimerNeeded] = useState(false)

  const [scoreType, setScoreType] = useState('')
  const [shortScoreType, setShortScoreType] = useState('')

  const [timerMinutes, setTimerMinutes] = useState(2)
  const [timerSeconds, setTimerSeconds] = useState(30)

  const [cardStorage, setCardStorage] = useState([1, 3, 5, 7, 9])

  const dispatch = useDispatch()

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

  const smartShortTypeSetter = (text: string) => {
    if (text.length >= 0 && text.length <= 3) {
      setShortScoreType(text)
    }
  }

  const inputsForInputMaker = [
    {
      type: 'switcher',
      label: 'Scram master as a player:',
      constant: scramMasterAsPlayer,
      setter: setScramMasterAsPlayer,
    },
    {
      type: 'switcher',
      label: 'Changing card in round end:',
      constant: changingCardInRoundEnd,
      setter: setChangingCardInRoundEnd,
    },
    {
      type: 'switcher',
      label: 'Is timer needed:',
      constant: isTimerNeeded,
      setter: setIsTimerNeeded,
    },
    {
      type: 'text',
      label: 'Score type:',
      constant: scoreType,
      setter: setScoreType,
    },
    {
      type: 'text',
      label: 'Score type (Short):',
      constant: shortScoreType,
      setter: smartShortTypeSetter,
    },
  ]

  const inputMaker = (
    type: string,
    label: string,
    constant: any,
    setter: any,
    index: number
  ) => {
    return (
      <div className="setting">
        <span>{label}</span>

        {type === 'switcher' ? (
          <Switcher key={index} switcherOn={constant} setSwitcherOn={setter} />
        ) : (
          <input
            key={index}
            onChange={(event) => setter(event.target.value)}
            required
            type="text"
            className="inputElem"
          />
        )}
      </div>
    )
  }

  const minifiedInputs = inputsForInputMaker.map(
    ({ type, label, constant, setter }, index) =>
      inputMaker(type, label, constant, setter, index)
  )

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

    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: formInfo,
    })
  }, [
    scramMasterAsPlayer,
    changingCardInRoundEnd,
    isTimerNeeded,
    scoreType,
    shortScoreType,
    timerMinutes,
    timerSeconds,
    cardStorage,
  ])

  return (
    <div className="game-settings-wrapper">
      <div className="game-settings">
        <div className="main-text">
          <h2>Game settings: </h2>
        </div>
        {minifiedInputs}
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
      </div>

      <div className="cards-container">
        <CustomCard
          setCardStorage={setCardStorage}
          cardStorage={cardStorage}
          coffee
        />
        {cardStorage.map((card, index) => (
          <CustomCard
            key={index}
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
