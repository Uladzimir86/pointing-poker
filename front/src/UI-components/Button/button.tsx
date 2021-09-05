import './button.scss'
import React from 'react'

type PropsButton = {
  text: string
  type?: 'submit' | 'reset' | 'button'
  styleButton: 'primary' | 'add'
  onClick?: () => void
}

export const Button: React.FC<PropsButton> = ({
  text,
  onClick,
  type,
  styleButton,
}) => {
  return (
    <button className={`btn_${styleButton}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}
