import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './Message/Message.jsx';
import DialogItem from './DialogItems/DialogItems.jsx';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Serhii" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Vova" }
    ]
    let messages = [
        { id: 1, message: "Hi.Men" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Hi,Men" },
        { id: 4, message: "how you doing?" },
        { id: 5, message: "how you doing?" }
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Messages message={m.message} />);

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.Messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;