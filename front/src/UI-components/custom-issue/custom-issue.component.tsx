import { FC, useState } from 'react'
import './custom-issue.styles.scss'
import editIcon from '../../assets/icons/edit-card-icon.png'
import deleteIcon from '../../assets/icons/delete-card-icon.png'
import closeIcon from '../../assets/icons/close-card-icon.png'
import { CustomIssueInterface } from '../../common/interfaces'
import { useDispatch } from 'react-redux'
import { deleteIssue, editIssue, toggleModalWindow } from '../../store/actions'


const CustomIssue: FC<CustomIssueInterface> = ({ priority, title, link }) => {
  const currentCard = false
  const editButton = true
  const closeButton = false
  const deleteButton = true
  const dispatch = useDispatch()
  const [issueCard , setIssueCard] = useState<CustomIssueInterface>({link:link,title:title,priority:priority})
 
  const handlerEditIssue = () => {
    dispatch(editIssue(issueCard))
    dispatch(toggleModalWindow(true))
    
  }

  const handlerDeleteIssue = () => {
    dispatch(deleteIssue(title))
  }

  return (
    <div className={`custom-issue ${currentCard ? 'current-card' : ''}`}>
      <div className="content-text">
        {currentCard && <div className="selected-issue-text">CURRENT</div>}
        {title && (
          <a className="main-text" href={link}>
            {title}
          </a>
        )}
        {priority && <div className="priority-text">{priority} priority</div>}
      </div>

      <div className="buttons">
        {editButton && (
          <div onClick={handlerEditIssue}>
            <img src={editIcon} alt="Edit" className="edit-button " />
          </div>
        )}

        {deleteButton && (
          <div>
            <img
              onClick={handlerDeleteIssue}
              src={deleteIcon}
              alt="Delete"
              className="delete-button "
            />
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
