import { IStateGame, ISelectedCard } from './../../../common/interfaces'
import { ActionSetSelectedCard, SELECTED_CARD } from './gameActions'

type gameActionsType = ActionSetSelectedCard

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
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
    default:
      return state
  }
}
