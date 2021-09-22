import React from 'react'
import './modalWindow.scss'
import '../../pages/StartPage/StartPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalWindow } from '../../store/reducers/globalReducer/globalActions'
import { IStateGlobal, IStore } from '../../common/interfaces'

export const ModalWindow: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  const statusModalWindow: boolean = useSelector(
    (state: IStore) => state.globalSettings.modalWindow
  )

  return (
    <div
      className={statusModalWindow ? 'modal active' : 'modal'}
      onClick={(e) => {
        e.stopPropagation()
        dispatch(toggleModalWindow(false))
      }}
    >
      <div
        className={
          statusModalWindow ? 'modal__content active' : 'modal__content'
        }
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}
