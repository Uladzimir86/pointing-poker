import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { playerCardsReducer } from './player-cards-reduser/player-cards-reduser'
import { ChangeIssuesReducer } from './issuesReducer/issueReducer'
import { locationReducer } from './location/locationReducer'
import { globalReducer } from './globalReducer/globalReducers'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  globalSettings: globalReducer,
  issues: ChangeIssuesReducer,
  playerCards: playerCardsReducer,
  location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
