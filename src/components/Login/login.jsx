import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../common/formsControls/formsControls";
import { required } from "../../utilits/validator/validator";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          name={"login"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={"remember me"}
          component={Input}
          validate={[required]}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
