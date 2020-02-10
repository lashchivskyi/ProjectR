const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost); // добавляєм пост
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText; // добавляєм пост
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store;

export default store;
