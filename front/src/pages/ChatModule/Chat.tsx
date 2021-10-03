import React from "react";
import './chat.scss'


type PropsChat = {
    showChatbar: boolean
}
export const Chat : React.FC<PropsChat>= ({showChatbar})=>{

    return <div id='#chatbar' className = {showChatbar? 'chatbar': 'chatbar disabled'}>

    </div>
}