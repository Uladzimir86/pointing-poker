import { IStateGame, ISelectedCard } from './../../../common/interfaces'
import { ActionGamePage, CURRENT_ISSUE, SELECTED_CARD } from './gameActions'

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
  idCurrentIssue: '',
}

export function gameReducer(
  state: IStateGame = initialStateGame,
  action: ActionGamePage
) {
  switch (action.type) {
    case SELECTED_CARD: {
      return {
        ...state,
        selectedCardVote: {
          isSelected: action.payload.isSelected,
          idCard: action.payload.idCard,
        },
      }
    }
    case CURRENT_ISSUE: {
      return {
        ...state,
        idCurrentIssue: action.payload,
      }
    }

    default:
      return state
  }
}
