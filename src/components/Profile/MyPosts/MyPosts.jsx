import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={classes.blosk}>
      <h3>My Posts</h3>
      <MyMessageFormRedux onSubmit={onAddPost} />
      <div className={classes.content}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field name="newPostText" component="textarea"></Field>
        </div>
        <div>
          <button>Add comit</button>
        </div>
      </div>
    </form>

    // <Field
    //   component="textarea"
    //   name="newMessageChange"
    //   placeholder="Enter your message"
    // ></Field>
  );
};

const MyMessageFormRedux = reduxForm({ form: "profileAddMesegeForm" })(
  MyPostsForm
);

export default MyPosts;
