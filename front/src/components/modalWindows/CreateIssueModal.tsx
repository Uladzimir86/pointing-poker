import React, { useEffect, useState } from 'react'
import { Button } from '../../UI-components/Button/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../UI-components/custom-dropdown/custom-dropdown.styles.scss'
import './CreateIssueModal.scss'
import {
  addNewIssue,
  deleteIssue,
  editIssue,
  toggleModalWindow,
} from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CustomIssueInterface, IStore } from '../../common/interfaces'
import { initialEditIssueCard } from '../../store/reducers/issuesReducer/issueReducer'

export const CreateIssueModal: React.FC = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit,formState: { errors } } = useForm<CustomIssueInterface>()
  const [result, setResult] = useState<CustomIssueInterface>()
  const onSubmit: SubmitHandler<CustomIssueInterface> = (data) => {
    setResult(data)
    dispatch(addNewIssue(data))
    dispatch(editIssue(initialEditIssueCard))

    onCloseModal()
  }

  const editIssueCard: CustomIssueInterface = useSelector(
    (state: IStore) => state.issues.editIssueCard
  )
  const arrOfIssues: CustomIssueInterface[] = useSelector(
    (state: IStore) => state.issues.issueCard
  )
  const onCloseModal = () => {
    dispatch(toggleModalWindow(false))
    dispatch(editIssue(initialEditIssueCard))
  }

  const updateModalWindow = (editIssueCard: CustomIssueInterface) => {
    dispatch(deleteIssue(editIssueCard.title))
  }

  useEffect(() => {
    updateModalWindow(editIssueCard)
    console.log(editIssueCard)
  }, [editIssueCard])

  return (
    <div className="container_createIssue">
      <div className="createIssue__title">
        <h3>Create Issue</h3>
      </div>
      <form className="createIssue__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="createIssue__form_inputs">
          <label htmlFor="">Title:</label>
          <div className="createIssue__form_inputs_block">
          <input
            defaultValue={editIssueCard.title}
            className="inputElem"
            {...register('title', {
              required: true,
              pattern: {
                value: /\w\s/,
                message: 'This title is exist',
              },
            })}
          />
          {errors.title && (
              <p className="error_validate" >{errors.title.message}</p>
            )}
          </div>
          
          <label htmlFor="">Link:</label>
          <input
            defaultValue={editIssueCard.link}
            className="inputElem"
            {...register('link')}
          />
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
