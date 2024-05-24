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