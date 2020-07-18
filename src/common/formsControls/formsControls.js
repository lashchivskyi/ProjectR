import React from "react";
import classes from "./formsControls.module.css";

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControll + " " + (hasError ? classes.error : "")}
    >
      <div>{props.children}</div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// import React from "react";
// import classes from "./formsControls.module.css";

// export const Texterea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div
//       className={classes.formControll + " " + (hasError ? classes.error : "")}
//     >
//       <div>
//         <textarea {...input} {...props}></textarea>
//       </div>
//       <div>{hasError && <span>{meta.error}</span>}</div>
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div
//       className={classes.formControll + " " + (hasError ? classes.error : "")}
//     >
//       <div>
//         <input {...input} {...props}></input>
//       </div>
//       <div>{hasError && <span>{meta.error}</span>}</div>
//     </div>
//   );
// };
