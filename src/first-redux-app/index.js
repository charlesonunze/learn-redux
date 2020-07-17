const store = require("./store");

store.dispatch({
  type: 'ADD_BUG',
  payload: {
    description: 'New bug'
  }
})

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_BUG',
  payload: {
    id: 1
  }
})

console.log(store.getState());