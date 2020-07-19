import { createAction } from '@reduxjs/toolkit'

// Action creators
export const addBug = createAction('ADD_BUG');
export const removeBug = createAction('REMOVE_BUG');

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case addBug.type:
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
          id: ++lastId
        }
      ]
      break;

    case removeBug.type:
      return state.filter(b => b.id !== action.payload.id)
      break;

    default:
      return state;
      break;
  }
}
