import { createAction, createReducer } from '@reduxjs/toolkit'

// Action creators
export const addBug = createAction('ADD_BUG');
export const resolveBug = createAction('RESOLVE_BUG');

let lastId = 0;

// Reducer
export default createReducer([], {
  [addBug.type]: (bugs, action) => {
    bugs.push({
      description: action.payload.description,
      resolved: false,
      id: ++lastId
    })
  },

  [resolveBug.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs[index].resolved = true
  }
});
