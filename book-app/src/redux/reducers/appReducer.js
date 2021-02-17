// import types
import { FETCH_BOOKS, IS_LOADING } from "../Types";
// Define an initial state value for the app
const initialState = {
  books: [],
  loading: false,
};
// appReducer function
export function appReducer(state = initialState, action) {
  // depending on the action type change state
  switch (action.type) {
    // all books fetched
    case FETCH_BOOKS: {
      return { ...state, books: action.payload };
    }
    // is app in loading state
    case IS_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}
