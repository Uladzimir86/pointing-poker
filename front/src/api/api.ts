import { IPlayerForm, IPlayerCard} from '../common/interfaces'
import { AppThunk } from '../types/reducers/game-settings'

const setWS: AppThunk = (dispatch) => {

  const wsConnection = new WebSocket('ws://localhost:4000')

  wsConnection.onopen = () => {
    dispatch({type: 'WS', ws: wsConnection});
    wsConnection.onmessage = function(event) {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'SET_PLAYERS':
          dispatch({type: 'SET_PLAYERS', payload: data.players});
          break;
        case 'SET_LOCATION':
          dispatch({type: 'SET_LOCATION', payload: data.location});
      }
    };
    wsConnection.onclose = function(event) {
      if(event.wasClean)
        alert('Connection to session closed. Reason: ' + event.reason);
    };
  }

  wsConnection.onerror = function(error: Event) {
    alert("Error: no connection...");
  };
}

export const sendPlayerForm = (playerForm: IPlayerForm): AppThunk => {
  return (dispatch, getState)  => {
    const player: IPlayerCard = {
      name: playerForm.firstName + ' ' + playerForm.lastName,
      position: playerForm.position,
      photo: playerForm.image,
      id: Date.now()
    }
    getState().playerCards.ws?.send(JSON.stringify({type: 'PUT_PLAYER', player}));
    getState().playerCards.ws?.send(JSON.stringify({type: 'SET_LOCATION', location: '/lobby'}));
  }
}

export default setWS;
