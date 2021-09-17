import React, { useEffect, useState } from 'react'
import './timer.scss'

type PropsTimer = {
  minutes?: number
  seconds?: number
  isActive: boolean
}

export const TimerElement: React.FC<PropsTimer> = ({
  isActive = false,
  minutes = 0,
  seconds = 0,
}) => {
  const [time, setTime] = useState({
    minutes,
    seconds,
    counter: minutes * 60 + seconds,
  })
  const [startTimer, setStartTimer] = useState(isActive)
  
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (startTimer) {
      interval = setInterval(() => {
        const secondsCounter = time.counter % 60
        const minutesCounter = Math.floor(time.counter / 60)
        if (time.counter === 0) {
          setStartTimer(false)
        }
        setTime((state) => ({
          minutes: minutesCounter,
          seconds: secondsCounter,
          counter: state.counter - 1,
        }))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [startTimer, time.counter])

  return (
    <div  className="container_timer">
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
