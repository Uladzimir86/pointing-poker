import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../common/interfaces'
import { SettingsState } from '../../types/reducers/game-settings'
import './timer.scss'

type PropsTimer = {
  minutes?: number
  seconds?: number
  isActive?: boolean
  stopTimer: boolean
  setIsActive?: Function | undefined
}

export const TimerElement: React.FC<PropsTimer> = ({
  isActive = false,
  stopTimer = true,
  setIsActive
}) => {
  const settings:SettingsState = useSelector((state:IStore)=> state.settings)
 const [time, setTime] = useState({minutes:settings.timerMinutes, seconds:settings.timerSeconds, counter: settings.timerMinutes * 60 + settings.timerSeconds})

function restartTime() {
  setTime({minutes:settings.timerMinutes, seconds:settings.timerSeconds, counter: settings.timerMinutes * 60 + settings.timerSeconds})
}

  useEffect(() => {
    console.log(isActive)
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        const secondsCounter = time.counter % 60
        const minutesCounter = Math.floor(time.counter / 60)
        if (time.counter !== -1) {
          setTime((state) => ({
            minutes: minutesCounter,
            seconds: secondsCounter,
            counter: state.counter - 1,
          }))
        }
        if(time.counter===0){
          //restartTime()
          
        }
        
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, setIsActive, time.counter])

  return (
    <div className="container_timer">
      <div className="timer_minutes">
        <span className="timer_minutes-title">minutes</span>
        <div className="timer_minutes-counter">{time.minutes}</div>
      </div>
      <div className="timer_middle">:</div>
      <div className="timer_seconds">
        <span className="timer_seconds-title">seconds</span>
        <div className="timer_seconds-counter">{`${
          Number(time.seconds) < 10 ? `0${time.seconds}` : time.seconds
        }`}</div>
      </div>
    </div>
  )
}
