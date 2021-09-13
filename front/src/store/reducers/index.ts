import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { modalWindowReducer, typeModalWindowReducer } from '../globalReducers'
import { ChangeIssuesReducer } from './issuesReducer/issueReducer'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  modalWindow : modalWindowReducer,
  typeModalWindow: typeModalWindowReducer,
  issues: ChangeIssuesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
