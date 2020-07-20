import { combineReducers } from "redux";
import bugsReducer from './bugs';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer
});

export default rootReducer;