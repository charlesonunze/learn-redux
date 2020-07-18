const reducer = require("./reducer");

function createStore(reducer) {
  let state;

  return {
    dispatch: function (action) {
      state = reducer(state, action)
    },

    subscribe: function () {

    },

    getState: function () {
      return state;
    }
  }
}


const store = createStore(reducer);

module.exports = store;