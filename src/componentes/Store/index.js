import { createStore } from 'redux';

const initialState = {
  messages: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
