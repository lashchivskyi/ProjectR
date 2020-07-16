import React from "react";
import classes from "./Dialogs.module.css";
import Messages from "./Message/Message.jsx";
import DialogItem from "./DialogItems/DialogItems.jsx";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));

  // let onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // };

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageChange);
  };

  if (props.isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>{dialogsElements}</div>
      <div className={classes.Messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="addMessage">
      <div>
        <Field
          component="textarea"
          name="newMessageChange"
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMesegeForm" })(
  AddMessageForm
);

export default Dialogs;
