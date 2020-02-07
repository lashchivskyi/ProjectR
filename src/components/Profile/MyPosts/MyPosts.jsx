import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text)
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
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
        <button onClick={addPost}>Add comit</button>
      </div>
      <div className={classes.content}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
