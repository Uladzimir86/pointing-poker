import { IStateGame, ISelectedCard } from './../../../common/interfaces'
import {
  ActionSetSelectedCard,
  SELECTED_CARD,
  TOGGLE_TIMER,
} from './gameActions'
import { ActionGamePage, CURRENT_ISSUE } from './gameActions'

type gameActionsType = ActionSetSelectedCard

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
  startTimer: false,
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
