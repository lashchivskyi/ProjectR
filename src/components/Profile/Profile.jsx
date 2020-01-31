import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div >);
}

export default Profile;
