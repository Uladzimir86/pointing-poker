import { FC } from 'react'
import './custom-issue.styles.scss'
import editIcon from '../../assets/icons/edit-card-icon.png'
import deleteIcon from '../../assets/icons/delete-card-icon.png'
import closeIcon from '../../assets/icons/close-card-icon.png'
import createIcon from '../../assets/icons/create-card-icon.png'
import { CustomIssueInterface } from '../../common/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalWindow } from '../../store/actions'
import { IStateGlobal } from '../../store/globalReducers'

const CustomIssue: FC<CustomIssueInterface> = ({
  deleteButton,
  editButton,
  createButton,
  closeButton,
  currentCard,
  priority,
  number,
}) => {
  const dispatch = useDispatch()

  const handlerCreateIssue = () => {
    dispatch(toggleModalWindow(true))
  }

  const statusModalWindow: boolean = useSelector(
    (state: IStateGlobal) => state.modalWindow
  )

  return (
    <div className={`custom-issue ${currentCard ? 'current-card' : ''}`}>
      <div className="content-text">
        {currentCard && <div className="selected-issue-text">CURRENT</div>}
        {number && <div className="main-text">Issue {number}</div>}
        {createButton && <div className="main-text">Create New Issue</div>}
        {priority && <div className="priority-text">{priority} priority</div>}
      </div>

      <div className="buttons">
        {editButton && (
          <div>
            <img src={editIcon} alt="Edit" className="edit-button " />
          </div>
        )}

        {deleteButton && (
          <div>
            <img src={deleteIcon} alt="Delete" className="delete-button " />
          </div>
        )}

        {createButton && (
          <div onClick={handlerCreateIssue}>
            <img src={createIcon} alt="Create" className="create-button " />
          </div>
        )}
        {closeButton && (
          <div>
            <img src={closeIcon} alt="Close" className="close-button " />
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomIssue
