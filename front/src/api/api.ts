import { IPlayerForm, IPlayerCard } from '../common/interfaces'
import { toggleModalWindow } from '../store/reducers/globalReducer/globalActions'
import { AppThunk } from '../types/reducers/game-settings'

export const setSession = (idSession?: string): AppThunk => {

  return (dispatch, getState) => {
    const changePage = () => {

    }

    if (getState().playerCards.ws)
      getState().playerCards.ws.close(1000, 'New connection...')
    const wsConnection = new WebSocket('ws://localhost:4000')

    wsConnection.onopen = () => {
      console.log('onOpen')
      if (idSession) {
        wsConnection.send(
          JSON.stringify({ type: 'CHECK_ID_SESSION', idSession })
        )
      } else
        wsConnection.send(JSON.stringify({ type: 'SET_SESSION', idSession }))

      dispatch({ type: 'WS', ws: wsConnection })
      wsConnection.onmessage = function (event) {
        const data = JSON.parse(event.data)
        switch (data.type) {
          case 'SET_PLAYERS':
            dispatch({ type: 'SET_PLAYERS', payload: data.players })
            break
          case 'SET_LOCATION':
            dispatch({ type: 'SET_LOCATION', payload: data.location })
        }
      }

      wsConnection.onclose = function (event) {
        if (event.wasClean) {
           if (
            event.reason !== 'New connection...' &&
            getState().globalSettings.modalWindow
          )
            dispatch(toggleModalWindow(false))
          alert('Connection to session closed. Reason: ' + event.reason)
          dispatch({type: 'SET_LOCATION', payload: '/'})
        }
      }
    }
    wsConnection.onerror = function (error: Event) {
      alert('Error: no connection...')
      dispatch({type: 'SET_LOCATION', payload: '/'})
    }
  }
}

export const sendPlayerForm = (playerForm: IPlayerForm): AppThunk => {
  return (dispatch, getState) => {
    const player: IPlayerCard = {
      name: playerForm.firstName + ' ' + playerForm.lastName,
      position: playerForm.position,
      photo: playerForm.image,
      id: Date.now(),
    }
    dispatch({ type: 'SET_PLAYER_ID', id: player.id })
    getState().playerCards.ws?.send(
      JSON.stringify({ type: 'PUT_PLAYER', player })
    )
    getState().playerCards.ws?.send(
      JSON.stringify({ type: 'SET_LOCATION', location: '/lobby' })
    )
  }
}

export const deletePlayerCard =
  (id: number | undefined): AppThunk =>
  (dispatch, getState) => {
    if (id)
      getState().playerCards.ws?.send(
        JSON.stringify({ type: 'DEL_PLAYER', id })
      )
  }
export const closeSession =
  (id: number | undefined): AppThunk =>
  (dispatch, getState) => {
    if (id)
      getState().playerCards.ws?.send(
        JSON.stringify({ type: 'CLOSE_SESSION', id })
      )
  }
