import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserdata, loginExit } from "../../redux/login-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserdata();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserdata, loginExit })(
  HeaderContainer
);
