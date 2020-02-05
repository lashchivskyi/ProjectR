let rerenderEntireTree = () => {
  console.log("State chainged");
};

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 1
  };
  state.profilePage.posts.push(newPost); // добавляєм пост
  message: state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText; // добавляєм пост
  rerenderEntireTree(state);
};

export const cubscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
