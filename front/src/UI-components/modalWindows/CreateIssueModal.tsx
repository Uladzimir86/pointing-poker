import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button } from '../Button/button'
import { useForm } from 'react-hook-form'
import '../custom-dropdown/custom-dropdown.styles.scss'
import './CreateIssueModal.scss'

export interface IIssue {
  tittle: string
  link: string
  priority: 'Low' | 'Medium' | 'High'
}

type PropsModal = {
  setActiveModal: Function
  activeModal: boolean
}

export const CreateIssueModal: React.FC<PropsModal> = ({
  setActiveModal,
  activeModal,
}) => {
  const { register, handleSubmit } = useForm()
  const [selectedOption, setSelectedOption] = useState('Low')
  const [result, setResult] = useState('')
  const onSubmit = (data: IIssue) => setResult(JSON.stringify(data))

  const handlerSubmitModal = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    handleSubmit(onSubmit)
    setActiveModal(false)
  }

  return (
    <div className="container_createIssue">
      <div className="createIssue__title">
        <h3>Create Issue</h3>
      </div>
      <form className="createIssue__form" onSubmit={handlerSubmitModal}>
        <div className="createIssue__form_inputs">
          <label htmlFor="">Title:</label>
          <input className="inputElem" {...register('Title')} />
          <label htmlFor="">Link:</label>
          <input className="inputElem" {...register('Link')} />
          <label htmlFor="">Priority:</label>
          <div className="container_drop-down">
            <select className="drop-down" {...register('Priority')}>
              <option className="option" value="Low">
                Low
              </option>

              <option className="option" value="Medium">
                Medium
              </option>

              <option className="option" value="High">
                High
              </option>
            </select>
          </div>
        </div>

        <div className="createIssue__form_buttons">
          <Button text={'Yes'} styleButton={'primary'} type="submit" />
          <Button text={'No'} styleButton={'add'} />
        </div>
      </form>
    </div>
  )
}
