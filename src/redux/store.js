import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi,haw yu doing", likesCount: 234 },
        { id: 2, message: "Hello", likesCount: 134 }
      ],
      newPostText: "it-kam.com"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Serhii" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Vova" }
      ],
      messages: [
        { id: 1, message: "Hi.Men" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Hi,Men" },
        { id: 4, message: "how you doing?" },
        { id: 5, message: "how you doing?" }
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber() {
    console.log("State chainged");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}


window.store = store;

export default store;
