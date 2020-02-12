import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
//import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;
