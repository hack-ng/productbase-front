import {
  FETCH_ENTRIES_PENDING,
  FETCH_ENTRIES_REJECTED,
  FETCH_ENTRIES_FULFILLED,
  /////////////////////////
  APPROVE_ENTRY_PENDING,
  APPROVE_ENTRY_REJECTED,
  APPROVE_ENTRY_FULFILLED,
  /////////////////////////
  REJECT_ENTRY_PENDING,
  REJECT_ENTRY_REJECTED,
  REJECT_ENTRY_FULFILLED,
  /////////////////////////
  CREATE_ENTRY_PENDING,
  CREATE_ENTRY_REJECTED,
  CREATE_ENTRY_FULFILLED
} from "../actions/constants";

const initialState = {
  entries: null,
  newEntry: null,
  loading: false,
  error: null,
  // state that relate to actions once    
  createLoading: false,
  createError: null,
  createSuccess: null,
  message: null
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

    case CREATE_ENTRY_PENDING:
      return {
        ...state,
        createLoading: true,
        createError: null,
        createSuccess: null
      };

    case CREATE_ENTRY_REJECTED:
      return {
        ...state,
        createLoading: false,
        createError: action.payload,
      };

    case CREATE_ENTRY_FULFILLED:
      return {
        ...state,
        createLoading: false,
        createSuccess: true,
      };

    case APPROVE_ENTRY_PENDING:
    case REJECT_ENTRY_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case APPROVE_ENTRY_REJECTED:
    case REJECT_ENTRY_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case APPROVE_ENTRY_FULFILLED:
    case REJECT_ENTRY_FULFILLED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default entriesReducer;
