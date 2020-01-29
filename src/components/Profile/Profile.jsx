import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://konkurent.in.ua/media/uploads/prev/2019/11/07/19/04/30/_109476426_jheison3.png"></img>
      </div>
      <div>ava + word </div>
      <MyPosts />
    </div>);
}

export default Profile;
