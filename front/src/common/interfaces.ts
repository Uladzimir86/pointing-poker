import { SettingsState } from './../types/reducers/game-settings'

export interface CustomIssueInterface {
  link: string
  title: string
  priority: 'Low' | 'Medium' | 'High'
}

export interface IIssues {
  issueCard: CustomIssueInterface[]
  editIssueCard: CustomIssueInterface
}

export enum ModalType {
  kickModalWindow = 'kickModalWindow',
  createIssueModalWindow = 'createIssueModalWindow',
}

export enum TypeUser {
  master = 'master',
  member = 'member',
  observer = 'observer',
}
export interface IStateGlobal {
  modalWindow:boolean,  
  typeModalWindow : ModalType,
  typeUser : TypeUser,
  isEditIssue:boolean
}


export interface IStore {
  globalSettings: IStateGlobal
  settings: SettingsState
  issues: IIssues
}

