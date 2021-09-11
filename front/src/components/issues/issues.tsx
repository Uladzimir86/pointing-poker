import './issues.scss'
import CustomIssue from '../../UI-components/custom-issue/custom-issue.component'
import { CustomIssueInterface } from '../../common/interfaces'

interface IIssues {
  arrOfIssues: CustomIssueInterface[]
}

const Issues: React.FC<IIssues> = ({ arrOfIssues }) => {
  const issues = arrOfIssues.map(
    (
      {
        deleteButton,
        editButton,
        createButton,
        closeButton,
        currentCard,
        priority,
        number,
      },
      index: number
    ) => {
      return (
        <CustomIssue
          key={index}
          deleteButton={deleteButton}
          editButton={editButton}
          createButton={createButton}
          closeButton={closeButton}
          currentCard={currentCard}
          priority={priority}
          number={number}
        />
        
        
      )
    }
  )

  return (
    <div className="issues">
      <span className="title">Issues</span>
      <div className= "issues__container">
      <div className="issues__container">{issues }</div>
      <div className="issue__createNewIssue">
        <CustomIssue createButton />
      </div>
      </div>
      
    </div>
  )
}

export default Issues
