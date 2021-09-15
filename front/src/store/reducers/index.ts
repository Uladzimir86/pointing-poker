import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { ChangeIssuesReducer } from './issuesReducer/issueReducer'
import { globalReducer } from './globalReducer/globalReducers'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  globalSettings : globalReducer,
  issues: ChangeIssuesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
