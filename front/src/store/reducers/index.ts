import { gameSettingsReducer } from './game-settings/gameSettingsReducer'
import { combineReducers } from 'redux'
import { playerCardsReducer } from './player-cards-reduser/player-cards-reduser'
import { modalWindowReducer, typeModalWindowReducer } from '../globalReducers'
import { ChangeIssuesReducer } from './issuesReducer/issueReducer'
import { locationReducer } from './location/locationReducer';

export const rootReducer = combineReducers({
  settings: gameSettingsReducer,
  modalWindow : modalWindowReducer,
  typeModalWindow: typeModalWindowReducer,
  issues: ChangeIssuesReducer,
  playerCards: playerCardsReducer,
  location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
