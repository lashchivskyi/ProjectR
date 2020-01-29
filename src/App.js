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

const App = () => {
  return (
    <BrowserRouter>
      <div className="AppWrapper">
        <Header />
        <Nav />
        <div class="AppWrapperContent">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
