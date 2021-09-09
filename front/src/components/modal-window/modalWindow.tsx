import React from 'react'
import './modalWindow.scss'
<<<<<<< HEAD:front/src/UI-components/modalWindows/modalWindow.tsx
import '../../pages/StartPage/StartPage.scss'
=======
import '../../pages/StartPage/StartPage'
>>>>>>> d41a0e926d5afef4a76ef17412bd83c9fdd43af2:front/src/components/modal-window/modalWindow.tsx

type PropsModalStartPage = {
  setActiveModal: Function
  activeModal: boolean
}

export const ModalWindow: React.FC<PropsModalStartPage> = ({
  activeModal,
  setActiveModal, children
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
