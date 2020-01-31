import React from 'react';
import classes from './../Dialogs.module.css';

const Messages = (props) => {
    return <div className={classes.Messages}>{props.message}</div>
}

export default Messages;