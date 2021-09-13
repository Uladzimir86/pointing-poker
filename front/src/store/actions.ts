import { CustomIssueInterface } from './../common/interfaces'
import { ModalType } from '../common/interfaces'

//constants for actions
export const CREATE_ISSUE = 'CREATE_ISSUE'
export const EDIT_ISSUE = 'EDIT_ISSUE'
export const DELETE_ISSUE = 'DELETE_ISSUE'

export const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW'
export const TYPE_MODAL_LOBBY = 'TYPE_MODAL_LOBBY'

export const CHANGE_NEW_ISSUE = 'CHANGE_NEW_ISSUE'
export const CREATE_NEW_ISSUE = 'CREATE_NEW_ISSUE'
//type for actions

export type ActionToggleModalWindow = {
  type: typeof TOGGLE_MODAL_WINDOW
  payload: boolean
}

export type ActionTypeModalWindow = {
  type: typeof TYPE_MODAL_LOBBY
  payload: ModalType
}

export type ActionChangeIssuesField = {
  type: typeof CHANGE_NEW_ISSUE
  payload: CustomIssueInterface
}
export type ActionCreateIssuesField = {
  type: typeof CREATE_NEW_ISSUE
  payload: CustomIssueInterface
}

export type ActionDeleteIssue = {
  type: typeof DELETE_ISSUE
  payload: string
}

export type ActionEditIssue = {
  type: typeof EDIT_ISSUE
  payload: CustomIssueInterface
}
export type ActionIssues =
  | ActionChangeIssuesField
  | ActionCreateIssuesField
  | ActionDeleteIssue
  | ActionEditIssue
  
//Actions

export const toggleModalWindow = (
  status: boolean
): ActionToggleModalWindow => ({ type: TOGGLE_MODAL_WINDOW, payload: status })

export const setTypeModalWindow = (
  typeModal: ModalType
): ActionTypeModalWindow => ({ type: TYPE_MODAL_LOBBY, payload: typeModal })

export const addNewIssue = (issueForm: CustomIssueInterface): ActionIssues => ({
  type: CREATE_NEW_ISSUE,
  payload: issueForm,
})

export const deleteIssue = (issueForm: string): ActionIssues => ({
  type: DELETE_ISSUE,
  payload: issueForm,
})

export const editIssue = (issueForm: CustomIssueInterface): ActionIssues => ({
  type: EDIT_ISSUE,
  payload: issueForm,
})
