import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.blosk}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
      </div>
      <div>
        <button onClick={onAddPost}>Add comit</button>
      </div>
      <div className={classes.content}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
