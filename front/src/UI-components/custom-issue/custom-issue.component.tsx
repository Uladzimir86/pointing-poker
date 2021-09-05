import { FC } from 'react'
import './custom-issue.styles.scss'
import editIcon from '../../assets/icons/edit-card-icon.png'
import deleteIcon from '../../assets/icons/delete-card-icon.png'
import closeIcon from '../../assets/icons/close-card-icon.png'
import createIcon from '../../assets/icons/create-card-icon.png'

interface CustomIssueInterface {
  deleteButton?: boolean
  editButton?: boolean
  createButton?: boolean
  closeButton?: boolean
  currentCard?: boolean
  priority?: 'low' | 'medium' | 'high'
  number?: string
}

const CustomIssue: FC<CustomIssueInterface> = ({
  deleteButton,
  editButton,
  createButton,
  closeButton,
  currentCard,
  priority,
  number,
}) => {
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
          <div className="edit-button ">
            <img src={editIcon} alt="Edit" />
          </div>
        )}

        {deleteButton && (
          <div className="delete-button ">
            <img src={deleteIcon} alt="Delete" />
          </div>
        )}

        {createButton && (
          <div className="create-button ">
            <img src={createIcon} alt="Create" />
          </div>
        )}
        {closeButton && (
          <div className="close-button ">
            <img src={closeIcon} alt="Close" />
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomIssue
