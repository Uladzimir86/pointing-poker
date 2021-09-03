import './button.scss'
import React from 'react'

type propsButton = {
  text: string
  type?: 'submit' | 'reset' | 'button'
  styleButton: 'primary' | 'add'
  onClick?: () => void
}

export const Button: React.FC<propsButton> = ({
  text,
  onClick,
  type,
  styleButton,
}: propsButton) => {
  return (
    <button className={`btn_${styleButton}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}
