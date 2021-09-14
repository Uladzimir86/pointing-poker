import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { playerCardsReducer } from './player-cards-reduser/player-cards-reduser'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  set: playerCardsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
