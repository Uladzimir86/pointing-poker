import { IStateGame, ISelectedCard } from './../../../common/interfaces'
import { ActionSetSelectedCard, SELECTED_CARD, START_TIMER } from './gameActions'

type gameActionsType = ActionSetSelectedCard

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
  startTimer: false,
}

export function gameReducer(
  state: IStateGame = initialStateGame,
  action: gameActionsType
) {
  switch (action.type) {
    case SELECTED_CARD: {
      return {
        ...state,
        selectedCardVote: 
          {
            isSelected: action.payload.isSelected,
            idCard: action.payload.idCard,
          },
      }
    }
    case START_TIMER: 
      return {...state, startTimer: !state.startTimer}
    default:
      return state
  }
}
