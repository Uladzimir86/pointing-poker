import React from 'react'
import { Button } from '../Button/button'
import './KickPlayerModal.scss'

type PropsKickPlayer = {
  name?: string
  setActiveModal: Function

}

export const KickPlayerModal: React.FC<PropsKickPlayer> = ({ name, setActiveModal }) => {
  const handlerDelete = () => {
    //TO DO delete player
    console.log('delete player')
    setActiveModal(false)
  }

  return (
    <div className="container_KickPlayer">
      <div className="KickPlayer">
        <div className="KickPlayer__title">
          <h3>Kick player?</h3>
        </div>
        <div className="KickPlayer__register-">
          <h4>Are you really want to remove player {name} from game session?</h4>
        </div>
        <div className="KickPlayer__buttons">
          <Button
            text={'Confirm'}
            styleButton={'primary'}
            type="submit"
            onClick={handlerDelete}
          />
          <Button text={'Cancel'} styleButton={'add'} onClick={handlerDelete}/>
        </div>
      </div>
    </div>
  )
}
