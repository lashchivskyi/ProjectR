import React from "react";
import "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <div className="content">
      <Post massage="Hi,haw yu doing?" like="56" />
      <Post massage="Hello" like="476" />
      <Post massage="Hi, Im Serhii" like="246" />
      <Post massage="Hi" like="146" />
    </div>
  );
}

export default MyPosts;
