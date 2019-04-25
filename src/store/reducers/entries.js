import {
  FETCH_ENTRIES_PENDING,
  FETCH_ENTRIES_REJECTED,
  FETCH_ENTRIES_FULFILLED
} from "../actions/constants";

const initialState = {
  entries: null,
  loading: false,
  error: null
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ENTRIES_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case FETCH_ENTRIES_FULFILLED:
      return {
        ...state,
        loading: false,
        entries: action.payload
      };

    default:
      return state;
  }
};

export default entriesReducer;
