import React from "react";
import classes from "./DialogItems.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.Dialogs + " " + classes.active}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
