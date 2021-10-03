import React from "react";
import './chat.scss'
import PlayerCard from '../../UI-components/player-card/player-card'


type PropsChat = {
    showChatbar: boolean
}
export const Chat : React.FC<PropsChat>= ({showChatbar})=>{

    return <div id='#chatbar' className = {showChatbar? 'chatbar': 'chatbar disabled'}>
            <div className="chat">
                <div className="chat_row">
                    <div className="chat_row__msg">
                        <div className="chat_row__msg_text">
                            Vladimir how are you? Where is the server?
                        </div>
                    </div>
                    <div className="chat_row__user">
                        <PlayerCard btnDelPlayer={false} name={'MrBean'}/>
                    </div>
                </div>
                <div className="chat_control">
                    <input type="text" name="msg" id="input_msg" />
                    <button className="chat_control_btn">send</button>
                </div>
            </div>
    </div>
}