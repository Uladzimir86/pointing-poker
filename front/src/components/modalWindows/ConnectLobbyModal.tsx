import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../../UI-components/Button/button'
import Switcher from '../../UI-components/switcher/switcher'
import './ConnectLobby.scss'
import photo_member from '../../assets/icons/checkmark.png'
import { useDispatch, useSelector } from 'react-redux'
import { IPlayerForm } from '../../common/interfaces'
import {sendPlayerForm} from '../../api/api'
import {RootState} from '../../redux/index'
import { toggleModalWindow } from '../../redux/reducers/globalReducer/globalActions'

export const ConnectLobbyModal: React.FC = () => {
  const dispatch = useDispatch();
  
  const [isConnection, setIsConnection] = useState(false);
  const location = useSelector((state: RootState) => state.location)

  useEffect(() => {
      setIsConnection(false)
      onCloseModal()
    }, [location])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerForm>()

  const onSubmit: SubmitHandler<IPlayerForm> = (data) => {
    setIsConnection(true)
    dispatch(sendPlayerForm(data))
  }

  const onCloseModal = () => {
    dispatch(toggleModalWindow(false))
  }

  return (
    <div className="container_ConnectLobby">
      <div className="connectLobby__title">
        <h3>Connect to lobby</h3>
        <div className="connectLobby__title-right">
          <label htmlFor="connectObserver">connect as observer</label>
          {
            <Switcher
              switcherOn={false}
              setSwitcherOn={function (switcherState: boolean): void {
                throw new Error('Function not implemented.')
              }}
            />
          }
        </div>
      </div>
      <div className="connectLobby__register">
        <form
          className="connectLobby__register-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">First name:</label>
          <div className="connectLobby__register-form_block">
            <input
              className="inputElem"
              {...register('firstName', {
                required: true,
                pattern: {
                  value: /(^[A-Za-z-]+$)/,
                  message: 'First name must contain only letters',
                },
              })}
            />
            {errors.firstName && (
              <p className="error_validate">{errors.firstName.message}</p>
            )}
          </div>
          <label htmlFor="">Last name:</label>
          <div className="connectLobby__register-form_block">
            <input
              className="inputElem"
              {...register('lastName', {
                required: false,
                pattern: {
                  value: /(^[A-Za-z-]+$)/,
                  message: 'Last name must contain only letters',
                },
              })}
            />
            {errors.lastName && (
              <p className="error_validate">{errors.lastName.message}</p>
            )}
          </div>
          <label htmlFor="">Job position:</label>
          <div className="connectLobby__register-form_block">
            <input
              className="inputElem"
              {...register('position', {
                required: false,
                pattern: {
                  value: /(^[A-Za-z-]+$)/,
                  message: 'Invalid Job Position',
                },
              })}
            />
            {errors.position && (
              <p className="error_validate">{errors.position.message}</p>
            )}
          </div>

          <div className="connectLobby__register-form_image">
            <label>Image:</label>
            <div className="connectLobby__register-form_image-choose">
              <div id="output_text">Choose file</div>
              <Button text={'Choose'} styleButton={'primary'} />
            </div>
            <img
              src={photo_member}
              alt="photo_member"
              width="83px"
              height="83px"
            />
          </div>
          <div className="connectLobby__register-form_buttons">
            <Button 
              text={'Confirm'} 
              styleButton={'primary'} 
              type="submit" 
              disabled={isConnection}
            />
            {isConnection && <span className="connection">Connection...</span>}
            <Button
              text={'Cancel'}
              styleButton={'add'}
              onClick={onCloseModal}
              disabled={isConnection}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
