import {
  IStateGame,
  ISelectedCard,
  IStatiscicsGame,
} from './../../../common/interfaces'
import {
  ActionGamePage,
  CURRENT_ISSUE,
  SELECTED_CARD,
  SET_STAT_ROUND,
  SHOW_STATISTICS,
  ActionSetSelectedCard,
  TOGGLE_TIMER,
} from './gameActions'

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStatGame: IStatiscicsGame = {

  results: {},
  showStatRound: false,
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
  statGame: initialStatGame,
  startTimer: false,
  idCurrentIssue: '333',
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
  
    case SET_STAT_ROUND: {
      return {
        ...state,
         statGame: { showStatRound: true, results: action.payload },
      }
    }
    // case 'DEL_STAT_ROUND': {
    //   const arr = [...state.statGame.results]
    //   arr.pop()
    //   return {
    //     ...state,
    //      statGame: { ...state.statGame, results: [...arr]},
    //   }
    // }
    case SHOW_STATISTICS: {
      return {
        ...state,
        statGame: { ...state.statGame, showStatRound: action.payload },
      }
    }
    default:
      return state
  }
}
