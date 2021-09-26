import { IStateGame, ISelectedCard, IStatiscicsGame } from './../../../common/interfaces'
import { ActionGamePage, CURRENT_ISSUE, SELECTED_CARD, SET_STAT_ROUND, SHOW_STATISCICS,ActionSetSelectedCard, TOGGLE_TIMER } from './gameActions'


export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStatGame : IStatiscicsGame= {
  results: [{idIssue: '', resultsVote: [/* 19,22,15,46,99,0 */]}],
  showStatRound : true
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
        stateGame : [...state.statGame.results, action.payload],
      }
    }
    case SHOW_STATISCICS: {
      return {
        ...state,
        showStatRound: action.payload,
      }
    }
    default:
      return state
  }
}
