import {
  CREATE_USER_PENDING,
  CREATE_USER_REJECTED,
  CREATE_USER_FULFILLED,
  //////////////////////
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_FULFILLED,
  //////////////////////
  FETCH_USER_PENDING,
  FETCH_USER_REJECTED,
  FETCH_USER_FULFILLED,
  /////////////////////
  LOGOUT_USER,
} from "../actions/constants";

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  success: null,
  regLoading: false,
  regError: null,
  regSuccess: null,
  fetchLoading: false,
  fetchError: null,
  fetchSuccess: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //   CREATE USER
    case CREATE_USER_PENDING:
      return {
        ...state,
        regLoading: true,
        error: null,
        success: null
      };

    case CREATE_USER_REJECTED:
      return {
        ...state,
        regLoading: false,
        error: action.payload
      };

    case CREATE_USER_FULFILLED:
      return {
        ...state,
        regLoading: false,
        // user: action.payload,
        success: true
      };

    //   LOGIN USER
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        success: null
      };

    case LOGIN_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        token: action.payload,
        success: true
      };

    //   FETCH USER
    case FETCH_USER_PENDING:
      return {
        ...state,
        fetchLoading: true,
        fetchError: null
      };

    case FETCH_USER_REJECTED:
      return {
        ...state,
        fetchLoading: false,
        fetchError: action.payload
      };

    case FETCH_USER_FULFILLED:
      return {
        ...state,
        fetchLoading: false,
        user: action.payload
      };

    // LOG USER OUT
    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        user: null,
        token: null
      };

    default:
      return state;
  }
};

export default authReducer;
