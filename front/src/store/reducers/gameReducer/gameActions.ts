import { ISelectedCard } from './../../../common/interfaces'
export const SELECTED_CARD = 'SELECTED_CARD'
export const CURRENT_ISSUE = 'CURRENT_ISSUE'

export type ActionSetSelectedCard = {
  type: typeof SELECTED_CARD
  payload: ISelectedCard
}

export type ActionCurrentIssue = {
  type: typeof CURRENT_ISSUE
  payload: string
}

export type ActionGamePage = ActionSetSelectedCard | ActionCurrentIssue

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
