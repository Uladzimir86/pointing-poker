import React, { useEffect, useState } from 'react'
import { Button } from '../Button/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../custom-dropdown/custom-dropdown.styles.scss'
import './CreateIssueModal.scss'

export interface IIssueForm {
  title: string
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
  const { register, handleSubmit } = useForm<IIssueForm>()
  const [result, setResult] = useState<IIssueForm>()
  const onSubmit: SubmitHandler<IIssueForm> = (data) => {
    setActiveModal(false)
    setResult(data)
  }

  const onCloseModal = () => {
    setActiveModal(false)
  }

  useEffect(() => {
    //TO DO fetch to server
    console.log(result)
  }, [result])

  return (
    <div className="container_createIssue">
      <div className="createIssue__title">
        <h3>Create Issue</h3>
      </div>
      <form className="createIssue__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="createIssue__form_inputs">
          <label htmlFor="">Title:</label>
          <input className="inputElem" {...register('title')} />
          <label htmlFor="">Link:</label>
          <input className="inputElem" {...register('link')} />
          <label htmlFor="">Priority:</label>
          <div className="container_drop-down">
            <select className="drop-down" {...register('priority')}>
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
          <Button text={'No'} styleButton={'add'} onClick={onCloseModal} />
        </div>
      </form>
    </div>
  )
}
