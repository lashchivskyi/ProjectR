import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="content">
      <div>
        <img
          alt="img"
          src="https://konkurent.in.ua/media/uploads/prev/2019/11/07/19/04/30/_109476426_jheison3.png"
        ></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img alt="img" src={props.profile.photos.large} />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
        ava + word
      </div>
    </div>
  );
};

export default ProfileInfo;
