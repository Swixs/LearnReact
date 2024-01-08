import React from "react";
import ClassDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Messages from "./DialogMessages";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../Redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    console.log(state)

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.message.map(m => <Messages message={m.message} id={m.id} />)

    let newMessageBody = state.newMessageBody;

    let messageItem = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMassageChange = (e) => {
    let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div>
            <div className={ClassDialogs.dialogs}>

                <div className={ClassDialogs.users}>
                    {dialogsElements}
                </div>

                <div className={ClassDialogs.chats}>
                    {messagesElements}
                </div>
            </div>
            <div className={ClassDialogs.itemArea}>
                <textarea ref={messageItem}
                value={newMessageBody}
                onChange={onNewMassageChange}
                placeholder="enter your message"></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div >
        </div>
    );
}

export default Dialogs