import { SET_SEARCH_QUERY } from "../actions/setSearchQuery";

const initialState = {
  searchQuery: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
