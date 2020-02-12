import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { Route } from "react-router-dom";
import Music from "./components/Profile/Music/Music.jsx";
import News from "./components/Profile/News/News.jsx";
import Settings from "./components/Profile/Settings/Settings.jsx";
//import store from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = props => {
  return (
    <div className="AppWrapper">
      <Header />
      <Nav />
      <div class="AppWrapperContent">

        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />} />

        <Route
          path="/profile"
          render={() => <Profile store={props.store} />} />

        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
