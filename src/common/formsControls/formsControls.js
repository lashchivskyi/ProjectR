import React from "react";
import classes from "./formsControls.module.css";

export const Texterea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControll + " " + (hasError ? classes.error : "")}
    >
      <div>
        <textarea {...input} {...props}></textarea>
      </div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControll + " " + (hasError ? classes.error : "")}
    >
      <div>
        <input {...input} {...props}></input>
      </div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};
