import {
  SettingsActionTypes,
  SettingsState,
  UpdateSettingsAction,
} from '../../../types/reducers/game-settings'

const initialState: SettingsState = {
  cardStorage: ['Coffee', '1', '2', '3', '5', '8'],
  changingCardInRoundEnd: false,
  isTimerNeeded: false,
  scoreType: '',
  scramMasterAsPlayer: false,
  shortScoreType: '',
  timerMinutes: 0,
  timerSeconds: 10,
  title: 'Session #1'
}

export const gameSettingsReducer = (
  state = initialState,
  action: UpdateSettingsAction
): SettingsState => {
  switch (action.type) {
    case SettingsActionTypes.UPDATE_SETTINGS:
      return { ...state, ...action.payload }
    case SettingsActionTypes.UPDATE_CARDSTORAGE:
      return { ...state, cardStorage: action.payload }
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_SETTINGS':
      return { ...state, ...action.payload }

    default:
      return state
  }
}
