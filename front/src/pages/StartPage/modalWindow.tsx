import React from 'react'
import './modalWindow.scss'
import './StartPage.scss'

type PropsModalStartPage = {
  setActiveModal: Function
  activeModal: boolean
}

export const ModalWindow: React.FC<PropsModalStartPage> = ({
  activeModal,
  setActiveModal,
  children,
}) => {
  return (
    <div
      className={activeModal ? 'modal active' : 'modal'}
      onClick={() => setActiveModal(false)}
    >
      <div
        className={activeModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
