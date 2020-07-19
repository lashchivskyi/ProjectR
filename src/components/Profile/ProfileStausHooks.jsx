import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(false);

  let activateMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classes.container}>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>{props.status || "-----"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;
