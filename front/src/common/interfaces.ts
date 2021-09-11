export interface IIssueForm {
    title: string
    link: string
    priority: 'Low' | 'Medium' | 'High'
}

export interface CustomIssueInterface {
    deleteButton?: boolean
    editButton?: boolean
    createButton?: boolean
    closeButton?: boolean
    currentCard?: boolean
    priority?: string
    number?: string
  }
  