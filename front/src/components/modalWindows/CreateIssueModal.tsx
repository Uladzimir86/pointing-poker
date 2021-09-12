import React, { useEffect, useState } from 'react'
import { Button } from '../../UI-components/Button/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../UI-components/custom-dropdown/custom-dropdown.styles.scss'
import './CreateIssueModal.scss'
import { addNewIssue, toggleModalWindow } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { CustomIssueInterface } from '../../common/interfaces'

export const CreateIssueModal: React.FC = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm<CustomIssueInterface>()
  const [result, setResult] = useState<CustomIssueInterface>()
  const onSubmit: SubmitHandler<CustomIssueInterface> = (data) => {
    setResult(data)
    dispatch(addNewIssue(data))
    onCloseModal()
  }

  const onCloseModal = () => {
    dispatch(toggleModalWindow(false))
  }

  useEffect(() => {
    //TO DO fetch to server
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
