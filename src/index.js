import store from "./02_FIRST_REDUX_APP/store";
import { addBug, removeBug } from "./02_FIRST_REDUX_APP/actions";

store.dispatch(addBug('New bug.'))
console.log(store.getState());

store.dispatch(removeBug(1))
console.log(store.getState());