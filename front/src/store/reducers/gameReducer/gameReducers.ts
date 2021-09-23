import { IStateGame, ISelectedCard, IStatiscicsGame } from './../../../common/interfaces'
import { ActionGamePage, CURRENT_ISSUE, SELECTED_CARD, SET_STAT_ROUND, SHOW_STAT } from './gameActions'

export const initialVoteCard: ISelectedCard = {
  isSelected: false,
  idCard: 99,
}

export const initialStatGame : IStatiscicsGame= {
  results: [{idIssue: '333', resultsVote: [0,2,3]}],
  showStatRound :true
}

export const initialStateGame: IStateGame = {
  selectedCardVote: initialVoteCard,
  idCurrentIssue: '333',
  statGame :initialStatGame
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
        stateGame : [...state.statGame.results, action.payload],// ?
      }
    }
    case SHOW_STAT: {
      return {
        ...state,
        showStatRound :action.payload
       
      }
    }
    default:
      return state
  }
}
