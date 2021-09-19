import { ISelectedCard } from './../../../common/interfaces'
export const SELECTED_CARD = 'SELECTED_CARD'

export type ActionSetSelectedCard = {
  type: typeof SELECTED_CARD
  payload: ISelectedCard
}

export const setSelectedCard = (
  {isSelected , idCard }: ISelectedCard
): ActionSetSelectedCard => ({
  type: SELECTED_CARD,
  payload:  {isSelected , idCard },
})
