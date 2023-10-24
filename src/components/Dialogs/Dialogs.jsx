import React from "react";
import ClassDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Messages from "./DialogMessages";

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Lola' },
        { id: 2, name: 'NikitaHi' },
        { id: 3, name: 'Kirill' },
        { id: 4, name: 'Vova' },
        { id: 5, name: 'Vitya' }
    ]

    let message = [
        { id: 1, message: 'Привет ты как?' },
        { id: 2, message: 'ГО дс' },
        { id: 3, message: 'норм' },
        { id: 4, message: 'Офигеть' },
        { id: 5, message: 'Круто' },
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = message.map(m => <Messages message={m.message} id={m.id} />)


    return (
        <div className={ClassDialogs.dialogs}>
            <div className={ClassDialogs.users}>
                {dialogsElements}
            </div>
            <div className={ClassDialogs.chats}>
                {messagesElements}
            </div>
        </div >
    );
}

export default Dialogs