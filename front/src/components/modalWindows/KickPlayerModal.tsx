import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModalWindow } from '../../store/reducers/globalReducer/globalActions'
import { Button } from '../../UI-components/Button/button'
import './KickPlayerModal.scss'

type PropsKickPlayer = {
  name?: string
}

export const KickPlayerModal: React.FC<PropsKickPlayer> = ({ name}) => {

  const dispatch = useDispatch();
  
  const handlerDelete = () => {
    //TODO fetch delete player
    dispatch(toggleModalWindow(false))
    console.log('delete player')
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
