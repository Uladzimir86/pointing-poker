export enum SettingsActionTypes {
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
  UPDATE_CARDSTORAGE = 'UPDATE_CARDSTORAGE',
}

export interface SettingsState {
  cardStorage: number[]
  changingCardInRoundEnd: boolean
  isTimerNeeded: boolean
  scoreType: string
  scramMasterAsPlayer: boolean
  shortScoreType: string
  timerMinutes: number
  timerSeconds: number
}

export interface UpdateSettingsAction {
  type: string
  payload?: any
}