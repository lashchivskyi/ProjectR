import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './Message/Message.jsx';
import DialogItem from './DialogItems/DialogItems.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer"

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let newPostElementMessages = React.createRef();
    let addClickMessages = () => {
        let text = newPostElementMessages.current.value;
        alert(text);    // функція до onClick
    }

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Messages message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.Messages}>
                <div>{messagesElements}</div>
            </div>
            <div className="addMessage">
                <div><textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder="Enter your message" ref={newPostElementMessages}></textarea></div>
                <div><button onClick={onSendMessageClick}>Add Message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
