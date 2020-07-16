const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Serhii" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Igor" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Vova" },
  ],
  messages: [
    { id: 1, message: "Hi.Men" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Hi,Men" },
    { id: 4, message: "how you doing?" },
    { id: 5, message: "how you doing?" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,

        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
