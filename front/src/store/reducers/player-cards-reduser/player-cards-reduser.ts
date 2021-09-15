import {IPlayerCard, IPlayer } from '../../../common/interfaces'


const initialState: {playerCards: IPlayerCard[], ws: WebSocket | null}  = 
  {
    playerCards: [
    {
      photo: 'PH',
      name: 'Name',
      position: 'Position',
      btnDelPlayer: true,
      above: false,
      id: 0
    }
  ],
  ws: null
}


export const playerCardsReducer = (
  state = initialState,
  action: any
): any => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return  { ...state, playerCards: action.payload }
    case 'WS':
      return  { ...state, ws: action.ws }
    default:
      return state
  }
}
