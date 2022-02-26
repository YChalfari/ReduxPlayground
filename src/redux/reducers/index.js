import { combineReducers } from "redux";
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC": {
      return { ...state, count: state.count + 1 };
    }
    case "DEC": {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};
const animalsReducer = (state = { animals: ["donkey", "cat"] }, action) => {
  switch (action.type) {
    case "DELETE": {
      return { ...state, animals: action.payload };
    }
    case "INSERT": {
      return { ...state, animals: [...state.animals, action.payload] };
    }
    default:
      return state;
  }
};
const combinedReducers = combineReducers({ countReducer, animalsReducer });
export default combinedReducers;
