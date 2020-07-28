import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusHooks from "../Profile/ProfileStausHooks";
import userPhoto from "../../assets/images/user.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={classes.content}>
      <div className={classes.descriptionBlock}>
        <img
          alt="photoLarge"
          src={props.profile.photos.large || userPhoto}
          className={classes.avatar}
        />
        {props.isOwner && (
          <input type="file" onClick={onMainPhotoSelected}></input>
        )}
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
        <ProfileStatusHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
