import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
