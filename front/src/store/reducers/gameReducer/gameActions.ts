import { ISelectedCard } from './../../../common/interfaces'

export const SELECTED_CARD = 'SELECTED_CARD'
export const START_TIMER = 'START_TIMER'

export type ActionSetSelectedCard = {
  type: typeof SELECTED_CARD | typeof START_TIMER
  payload: ISelectedCard
}

export const setSelectedCard = (
  {isSelected , idCard }: ISelectedCard
): ActionSetSelectedCard => ({
  type: SELECTED_CARD,
  payload:  {isSelected , idCard },
})
