import React, { useEffect } from 'react'
import './modalWindow.scss'
import '../../pages/StartPage/StartPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalWindow } from '../../store/actions'
import { IStateGlobal } from '../../store/globalReducers'


export const ModalWindow: React.FC = ({
 children
}) => {
  const dispatch =useDispatch()
  const statusModalWindow : boolean  = useSelector((state: IStateGlobal) => state.modalWindow);
 
  return (
    <div
      className={statusModalWindow ? 'modal active' : 'modal'}
      onClick={() =>    dispatch(toggleModalWindow(false))
      }
    >
      <div
        className={statusModalWindow ? 'modal__content active' : 'modal__content'}
        onClick={(e) =>{
          
          dispatch(toggleModalWindow(false))
         }}
      >
        {children}
      </div>
    </div>
  )
}
