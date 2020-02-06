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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State chainged");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost); // добавляєм пост
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText; // добавляєм пост
    this._callSubscriber(this._state);
  },
  cubscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.store = store;

export default store;
