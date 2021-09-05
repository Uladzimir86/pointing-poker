import React, { useEffect, useState } from 'react'
import './timer.scss'

type propsTimer = {
  counter: number
  isActive: boolean
}

export const TimerElement: React.FC<propsTimer> = ({
  counter = 140,
  isActive = false,
}: propsTimer) => {
  const [time, setTime] = useState({
    minutes: '2',
    seconds: '20',
    counter: counter,
  })
  const [startTimer, setStartTimer] = useState<boolean>(isActive)

  useEffect(() => {
    let interval: any

    if (startTimer) {
      interval = setInterval(() => {
        const secondsCounter = String(time.counter % 60)
        const minutesCounter = String(Math.floor(time.counter / 60))
        console.log(minutesCounter, secondsCounter, 'time')
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
