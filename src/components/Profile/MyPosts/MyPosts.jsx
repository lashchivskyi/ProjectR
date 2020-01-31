import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={classes.blosk}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add comit</button>
      </div>
      <div className={classes.content}>
        {postsElements}
      </div>
    </div >
  );
}

export default MyPosts;
