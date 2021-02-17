// import types
import { FETCH_BOOKS, IS_LOADING } from "../Types";
// other imports
import axios from "axios";

// redux actions file
/**
 * function that sets new array which contains fetched books
 * @param {array} data- fetched array of data
 */
export const fetchBooksSet = (data = []) => ({
  type: FETCH_BOOKS,
  payload: data,
});
/**
 * function that sets boolean if data is fetched(loaded)
 * @param {array} data- boolean that sets if data is fetched(loaded)
 */
export const loadingSet = (data = false) => ({
  type: IS_LOADING,
  payload: data,
});

/**
 * function that fetch all the books from the API
 */
export const fetchBooks = (searchValue) => async (dispatch, getState) => {
  try {
    await dispatch(loadingSet(true));
    const formatedSearchValue = searchValue.replace(/ /g, "+");
    // send get request to fetch books
    const response = await axios.get(
      `http://openlibrary.org/search.json?q=${formatedSearchValue}`
    );
    const books = response.data.docs;
    // dispatch fetched books to the redux store
    await dispatch(fetchBooksSet(books));
    await dispatch(loadingSet(false));
  } catch (error) {
    console.log(error);
    await dispatch(loadingSet(false));
    alert("ERROR FETCHING DATA, BECAUSE OF CORS POLICY");
    throw error;
  }
};
