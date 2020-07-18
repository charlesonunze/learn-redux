const store = require("./store");
const { addBug, removeBug } = require("./actions");

store.dispatch(addBug('New bug from our custom redux!'))
console.log(store.getState());

store.dispatch(removeBug(1))
console.log(store.getState());
