import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

// Bug Slice
const bugSlice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    addBug: (bugs, action) => {
      bugs.push({
        description: action.payload.description,
        resolved: false,
        id: ++lastId
      })
    },

    resolveBug: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true
    }
  }
});

export const { addBug, resolveBug } = bugSlice.actions;
export default bugSlice.reducer;