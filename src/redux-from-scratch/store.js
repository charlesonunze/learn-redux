const reducer = require("./reducer");

function createStore(reducer) {
  let state;
  let listeners = [];

  return {
    dispatch: function (action) {
      state = reducer(state, action)

      listeners.forEach(listener => {
        listener()
      });
    },

    subscribe: function (listener) {
      listeners.push(listener)
    },

    getState: function () {
      return state;
    }
  }
}


const store = createStore(reducer);

module.exports = store;