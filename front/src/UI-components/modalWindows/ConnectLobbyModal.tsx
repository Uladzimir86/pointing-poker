import React, { useState  } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../../UI-components/Button/button'
import Switcher from '../../UI-components/switcher/switcher'
import './ConnectLobby.scss'
import photo_member from '../../assets/icons/checkmark.png'
import {IPlayerCard} from '../../UI-components/player-card/player-card'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

export interface IMember {
  firstName: string
  lastName: string
  position: string
  image?: string
}
type PropsModal = {
  setActiveModal: Function
}

export const ConnectLobbyModal: React.FC<PropsModal> = ({ setActiveModal }) => {
  const { register, handleSubmit } = useForm<IMember>()
  const history = useHistory();
  const [isConnection, setIsConnection] = useState(false)

  const onSubmit : SubmitHandler<IMember> = data =>  {
    sendForm(data)
  }

  const onCloseModal =()=>{
    setActiveModal(false)
  }

  const dispatch = useDispatch()

  const sendForm = (memberForm: IMember )=>{

  const player: IPlayerCard = {
    name: memberForm.firstName + memberForm.lastName,
    position: memberForm.position,
    photo: memberForm.image,
    id: Date.now()
  }
  setIsConnection(true);

  const wsConnection = new WebSocket("ws://localhost:4000");
  wsConnection.onopen = function() {
    dispatch({type: 'WS', ws: wsConnection})
    wsConnection?.send(JSON.stringify({type: 'PUT_PLAYER', player }));
  };

  wsConnection.onmessage = function(event) {
    const data = JSON.parse(event.data);
    if (data.type === 'SET_PLAYERS') {
      dispatch({type: 'SET_PLAYERS', payload: data.players})
      setIsConnection(false)
      setActiveModal(false)
      history.push('/lobby')
    }
  };
  wsConnection.onclose = function(event) {
    setIsConnection(false);
      // if (event.wasClean) {
      //   alert('Соединение закрыто чисто');
      // } else {
      //   alert('Обрыв соединения'); // например, "убит" процесс сервера
      // }
      alert('Connection to session closed. Reason: ' + event.reason);
  };
  wsConnection.onerror = function(error: Event) {
    const err = error as ErrorEvent;
    alert("Error: " + err.message);
  };


// async function resp(){
//       await fetch('http://localhost:4000/issues')
//       .then((res) => res.json())
//       .then((res) => setArrOfIssues([...res, ...arrOfIssues]));
//     }
  // useEffect(() => {
  //   resp();
  // },[]);
}

  return (
    <div className="container_ConnectLobby">
      <div className="connectLobby__title">
        <h3>Connect to lobby</h3>
        <div className="connectLobby__title-right">
          <label htmlFor="connectObserver">connect as observer</label>
          {   <Switcher
            switcherOn={false}
            setSwitcherOn={function (switcherState: boolean): void {
              throw new Error('Function not implemented.')
            }}
          />}
        </div>
      </div>
      <div className="connectLobby__register">
        <form
          className="connectLobby__register-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">First name:</label>
          <input className="inputElem" {...register('firstName')} />
          <label htmlFor="">Last name:</label>
          <input className="inputElem" {...register('lastName')} />
          <label htmlFor="">Job position:</label>
          <input className="inputElem" {...register('position')} />
          <div className="connectLobby__register-form_image">
            <label>Image:</label>
            <div className="connectLobby__register-form_image-choose">
              <div id="output_text">Choose file</div>
              <Button text={'Choose'} styleButton={'primary'} />
            </div>
            <img
              src={photo_member}
              alt="photo_member"
              width="83px"
              height="83px"
            />
          </div>
          <div className="connectLobby__register-form_buttons">
            <Button text={'Confirm'} styleButton={'primary'} type="submit" />
            {isConnection && <span>Connection...</span>}
            <Button text={'Cancel'} styleButton={'add'}  onClick={onCloseModal}/>
          </div>
        </form>
      </div>
    </div>
  )
}
