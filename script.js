 // Initial state
 const initialState = {
    count: 0
  };

  // Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { ...state, count: 0 };
      case ADD:
        return { ...state, count: state.count + 1 };
      case SUBTRACT:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };