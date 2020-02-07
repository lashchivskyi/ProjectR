import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Profile/Music/Music.jsx";
import News from "./components/Profile/News/News.jsx";
import Settings from "./components/Profile/Settings/Settings.jsx";

const App = props => {
  return (
    <div className="AppWrapper">
      <Header />
      <Nav />
      <div class="AppWrapperContent">
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
