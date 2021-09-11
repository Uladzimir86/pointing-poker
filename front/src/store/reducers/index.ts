import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { modalWindowReducer } from '../globalReducers'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  modalWindow : modalWindowReducer,
})

export type RootState = ReturnType<typeof rootReducer>
