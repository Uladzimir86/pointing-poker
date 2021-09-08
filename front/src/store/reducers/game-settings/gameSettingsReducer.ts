import {
  SettingsActionTypes,
  SettingsState,
  UpdateSettingsAction,
} from '../../../types/reducers/game-settings'

const initialState: SettingsState = {
  cardStorage: [1, 3, 5, 7, 9],
  changingCardInRoundEnd: false,
  isTimerNeeded: false,
  scoreType: '',
  scramMasterAsPlayer: false,
  shortScoreType: '',
  timerMinutes: 2,
  timerSeconds: 30,
}

export const gameSettingsReducer = (
  state = initialState,
  action: UpdateSettingsAction
): SettingsState => {
  switch (action.type) {
    case SettingsActionTypes.UPDATE_SETTINGS:
      return { ...action.payload }

    default:
      return state
  }
}
