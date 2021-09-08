import { SyntheticEvent, useEffect, useState, FC } from 'react';
import './session-title.scss';
import img from '../../assets/icons/edit-card-icon.png';
import PlayerCard from '../../UI-components/player-card/player-card';
import {Button} from '../../UI-components/Button/button';

interface ISTitle {
  photo?: string
  name?: string
  position?: string
}
const SessionTitle: FC<ISTitle> = ({photo, name, position}) => {

  const [sessionTitle, setSessionTitle] = useState('Please, enter  a new session name...')
  const [wrightTitle, setWrightTitle] = useState(true);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (/\w/.test(sessionTitle) || /[А-Яа-я]/.test(sessionTitle)) {
      setWarning(false);
    } else {
      setWarning(true);
      setSessionTitle('');
    }
  }, [sessionTitle])

  const changeTitleText = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setSessionTitle(input.value);
  }

  return (
    <div className="session-title">
      <div className="header">
        {warning && <span className="header__warning">Enter a new title...</span>}
        {!wrightTitle && <input type="text" className="header__input" value={sessionTitle} onChange={changeTitleText}/>}
        {!wrightTitle && <button type="button" className="header__button header__button_ok" disabled={warning} onClick={() => setWrightTitle(true)}>OK</button>}
        {wrightTitle && <span className="header__text">{sessionTitle}</span>}
        {wrightTitle && <button type="button" className="header__button" onClick={() => setWrightTitle(false)}>
                        <img src={img} alt="icon" className="header__icon"></img>
                      </button>}
      </div>
      <div className="scram-master">
        <span className="scram-master__text">Scrum master:</span>
        <PlayerCard 
          photo={photo} 
          name={name} 
          position={position} 
          btnDelPlayer={false}
          above={true}
        />
      </div>
      <div className="link-lobby">
        <span className="link-lobby__text">Link to lobby:</span>
        <div className="link-lobby__input">
          <input type="text" className="inputElem" />
          <Button text="Copy" type="button" styleButton="primary" onClick={() => console.log('btn Copy')}/>
        </div>
      </div>
      <div className="session-title__buttons">
        <Button text="Start Game" type="button" styleButton="primary" onClick={() => console.log('btn Start Game')}/>
        <Button text="Cancel Game" type="button" styleButton="add" onClick={() => console.log('btn Cancel Game')}/>
      </div>
    </div>
  )
}

export default SessionTitle;
