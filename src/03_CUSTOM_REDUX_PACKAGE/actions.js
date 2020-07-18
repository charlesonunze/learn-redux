const actions = require("./actionTypes");

const addBug = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description
  }
});

const removeBug = (id) => ({
  type: actions.REMOVE_BUG,
  payload: {
    id
  }
});

module.exports = {
  addBug,
  removeBug
};