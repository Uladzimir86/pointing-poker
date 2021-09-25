import { ISelectedCard, IStatiscicsRound } from './../../../common/interfaces'
export const SELECTED_CARD = 'SELECTED_CARD'
export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const CURRENT_ISSUE = 'CURRENT_ISSUE'
export const SET_STAT_ROUND = 'SET_STAT_ROUND'
export const SHOW_STATISCICS = 'SHOW_STATISCICS'

export type ActionSetSelectedCard = {
  type: typeof SELECTED_CARD | typeof TOGGLE_TIMER
  payload: ISelectedCard
}

export type ActionCurrentIssue = {
  type: typeof CURRENT_ISSUE
  payload: string
}

export type ActionSetStatRound = {
  type: typeof SET_STAT_ROUND
  payload: IStatiscicsRound
}

export type ActionShowStat = {
  type: typeof SHOW_STATISCICS
  payload: boolean
}

export type ActionGamePage =
  | ActionSetSelectedCard
  | ActionCurrentIssue
  | ActionSetStatRound
  | ActionShowStat

export const setSelectedCard = ({
  isSelected,
  idCard,
}: ISelectedCard): ActionGamePage => ({
  type: SELECTED_CARD,
  payload: { isSelected, idCard },
})

export const setCurrentIssue = (idIssue: string): ActionGamePage => ({
  type: CURRENT_ISSUE,
  payload: idIssue,
})

export const setStatRound = ({
  idIssue,
  resultsVote,
}: IStatiscicsRound): ActionGamePage => ({
  type: SET_STAT_ROUND,
  payload: { idIssue, resultsVote },
})

export const showStatiscics = ( status : boolean) :ActionShowStat => ({
  type: SHOW_STATISCICS, payload: status
})
