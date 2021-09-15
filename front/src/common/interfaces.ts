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

export interface IStore {
  settings: SettingsState
  modalWindow: boolean
  issues: IIssues
  typeModalWindow:ModalType
}

export interface IPlayerForm {
  firstName: string
  lastName: string
  position: string
  image?: string
}

export interface IPlayerCard {
  photo?: string
  name?: string
  position?: string
  btnDelPlayer?: boolean
  above?: boolean
  id?: number
}

export interface IPlayer {
  playerCards: IPlayerCard[], ws: WebSocket | null
}