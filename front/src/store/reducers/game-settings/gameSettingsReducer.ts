import {
  SettingsActionTypes,
  SettingsState,
  UpdateSettingsAction,
} from '../../../types/reducers/game-settings'

const initialState: SettingsState = {
  cardStorage: [1, 2, 3],
  changingCardInRoundEnd: false,
  isTimerNeeded: false,
  scoreType: '',
  scramMasterAsPlayer: false,
  shortScoreType: '',
  timerMinutes: 2,
  timerSeconds: 30,
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

    default:
      return state
  }
}
