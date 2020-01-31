import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.AllPost}>
      <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>);
}

export default Post;
