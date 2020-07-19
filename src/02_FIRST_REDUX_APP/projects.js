import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

// Bug Slice
const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      })
    }
  }
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;