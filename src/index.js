import store from "./02_FIRST_REDUX_APP/store";
import { addBug, resolveBug } from "./02_FIRST_REDUX_APP/bugs";
import { addProject } from "./02_FIRST_REDUX_APP/projects";

store.dispatch(addBug({ description: 'New bug.' }))
console.log(store.getState());

store.dispatch(resolveBug({ id: 1 }))
console.log(store.getState());

store.dispatch(addProject({ name: 'Project 1' }))
console.log(store.getState());

store.dispatch((dispatch,getState) => {
  console.log('Dispacting a function!');
  dispatch({ type: 'recieveBug', bugs: [1, 2, 3] })
})
console.log(store.getState());