// import types
import { FETCH_BOOKS } from "../Types";
// Define an initial state value for the app
const initialState = {
  books: [],
};
// appReducer function
export function appReducer(state = initialState, action) {
  // depending on the action type change state
  switch (action.type) {
    // all books fetched
    case FETCH_BOOKS: {
      return { ...state, books: action.payload };
    }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}
