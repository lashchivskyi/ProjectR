import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './Message/Message.jsx';
import DialogItem from './DialogItems/DialogItems.jsx';

const Dialogs = (props) => {

    let newPostElementMessages = React.createRef();
    let addClickMessages = () => {
        let text = newPostElementMessages.current.value;
        alert(text);    // функція до onClick
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Messages message={m.message} />);

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.Messages}>
                {messagesElements}
            </div>
            <div className="addMessage">
                <textarea ref={newPostElementMessages}></textarea>
                <button onClick={addClickMessages}>Add Message</button>
            </div>
        </div >
    )
}

export default Dialogs;
