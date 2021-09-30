import { Interface } from 'readline'
import { SettingsState } from './../types/reducers/game-settings'

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

export enum locationPath {
  startPage = '/',
  lobbyPage = '/lobby',
  gamePage = '/game',
}
export interface IStateGlobal {
  modalWindow: boolean
  typeModalWindow: ModalType
  typeUser: TypeUser
  isEditIssue: boolean
}

export interface IStore {
  globalSettings: IStateGlobal
  settings: SettingsState
  issues: IIssues
  playerCards: IPlayer
  location: string
  game: IStateGame
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
  playerCards: IPlayerCard[]
  ws: WebSocket | null
}

export interface ISelectedCard {
  isSelected: boolean
  idCard: number
}

export interface IStateGame {
  selectedCardVote: ISelectedCard
  startTimer: boolean
  idCurrentIssue: string
  statGame: IStatiscicsGame
}

export interface ITimer {
  start: boolean
  stop: boolean
  restart: boolean
}

export interface IStatiscicsRound {
  idIssue: string
  resultsVote: number[]
}
export interface Res {
  [key:string]: number[], 
}
export interface IStatiscicsGame {
  showStatRound: boolean
  results: Res
}

export interface IScoreMember {
  members: IPlayerCard
  points: number
}

export interface IScore {
  score: IScoreMember[]
}
export interface CustomIssueInterface {
  link: string
  title: string
  priority: 'Low' | 'Medium' | 'High'
  id?: string
}
export interface IStatiscics {
  cardStat: IStatiscicsCard[]
}
export interface IStatiscicsCard {
  percent: number
  valueCard: string
}
