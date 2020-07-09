import React from "react";
import classes from "./Dialogs.module.css";
import Messages from "./Message/Message.jsx";
import DialogItem from "./DialogItems/DialogItems.jsx";
import { Redirect } from "react-router-dom";
//import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer"

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (props.isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>{dialogsElements}</div>
      <div className={classes.Messages}>
        <div>{messagesElements}</div>
      </div>
      <div className="addMessage">
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
