import store from "./02_FIRST_REDUX_APP/store";
import { addBug, resolveBug } from "./02_FIRST_REDUX_APP/bugs";

store.dispatch(addBug({ description: 'New bug.' }))
console.log(store.getState());

store.dispatch(resolveBug({ id: 1 }))
console.log(store.getState());