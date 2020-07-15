import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "../Profile/ProfileStaus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      <div>
        {/* <img
          alt="imgIcon"
          src="https://konkurent.in.ua/media/uploads/prev/2019/11/07/19/04/30/_109476426_jheison3.png"
        ></img> */}
      </div>
      <div className={classes.descriptionBlock}>
        <img alt="photoLarge" src={props.profile.photos.large} />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
