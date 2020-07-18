const actions = require("./actionTypes");
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
          id: ++lastId
        }
      ]
      break;

    case actions.REMOVE_BUG:
      return state.filter(b => b.id !== action.payload.id)
      break;

    default:
      return state;
      break;
  }
}

module.exports = reducer;