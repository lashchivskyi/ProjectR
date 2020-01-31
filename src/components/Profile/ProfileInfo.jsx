import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className="content">
      <div>
        <img src="https://konkurent.in.ua/media/uploads/prev/2019/11/07/19/04/30/_109476426_jheison3.png"></img>
      </div>
      <div className={classes.descriptionBlock}>
        ava + word
        </div>
    </div>);
}

export default ProfileInfo;
