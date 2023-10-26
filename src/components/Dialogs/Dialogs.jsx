import React from "react";
import ClassDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Messages from "./DialogMessages";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.message.map(m => <Messages message={m.message} id={m.id} />)


    let messageItem = React.createRef();

    let addMessage = () => {
        let text = messageItem.current.value;
        alert(text);
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
                <textarea ref={messageItem}></textarea>
                <button onClick={addMessage}>send</button>
            </div >
        </div>
    );
}

export default Dialogs