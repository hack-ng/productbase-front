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
  CREATE_ENTRY_FULFILLED,
  /////////////////////////
  UPLOAD_CSV_PENDING,
  UPLOAD_CSV_REJECTED,
  UPLOAD_CSV_FULFILLED,
} from "../actions/constants";

const initialState = {
  entries: null,
  newEntry: null,
  loading: false,
  error: null,
  // state that relate to create action
  createLoading: false,
  createError: null,
  createSuccess: null,
  // state that relate to upload action
  uploadLoading: false,
  uploadError: null,
  uploadSuccess: null,

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
        createSuccess: null,
        uploadLoading: null,
        uploadError: null,
        uploadSuccess: null
      };

    case CREATE_ENTRY_REJECTED:
      return {
        ...state,
        createLoading: false,
        createError: action.payload
      };

    case CREATE_ENTRY_FULFILLED:
      return {
        ...state,
        createLoading: false,
        createSuccess: true
      };

    case UPLOAD_CSV_PENDING:
      return {
        ...state,
        createLoading: null,
        createError: null,
        createSuccess: null,
        uploadLoading: true,
        uploadError: null,
        uploadSuccess: null
      };

    case UPLOAD_CSV_REJECTED:
      return {
        ...state,
        uploadLoading: false,
        uploadError: action.payload
      };

    case UPLOAD_CSV_FULFILLED:
     console.log('upload csv ==> ',action.payload)
      const { products_count } = action.payload
      return {
        ...state,
        uploadLoading: false,
        uploadSuccess: true,
        message: `Success, Entry with ${products_count} products created!`
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
