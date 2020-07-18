import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Profile/Music/Music.jsx";
import News from "./components/Profile/News/News.jsx";
import Settings from "./components/Profile/Settings/Settings.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./common/preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="AppWrapper">
        <HeaderContainer />
        <Nav />
        <div className="AppWrapperContent">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter, // add withRouter error
  connect(mapStateToProps, { initializeApp })
)(App);
