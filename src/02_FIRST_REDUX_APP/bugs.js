// Action Types
const ADD_BUG = 'ADD_BUG';
const REMOVE_BUG = 'REMOVE_BUG';

// Action creators
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: {
    description
  }
});

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload: {
    id
  }
});

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
          id: ++lastId
        }
      ]
      break;

    case REMOVE_BUG:
      return state.filter(b => b.id !== action.payload.id)
      break;

    default:
      return state;
      break;
  }
}
