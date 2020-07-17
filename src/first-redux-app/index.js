const store = require("./store");
const actions = require("./actionTypes");

store.dispatch({
  type: actions.ADD_BUG,
  payload: {
    description: 'New bug'
  }
})

console.log(store.getState());

store.dispatch({
  type: actions.REMOVE_BUG,
  payload: {
    id: 1
  }
})

console.log(store.getState());