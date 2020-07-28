import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
