import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { playerCardsReducer } from './player-cards-reduser/player-cards-reduser'
import { modalWindowReducer, typeModalWindowReducer } from '../globalReducers'
import { ChangeIssuesReducer } from './issuesReducer/issueReducer'

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  modalWindow : modalWindowReducer,
  typeModalWindow: typeModalWindowReducer,
  issues: ChangeIssuesReducer,
  set: playerCardsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
