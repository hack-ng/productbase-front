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
} from "./constants";

import axios from "axios";

const createUserApi = "http://localhost:8000/api/auth/users";
const loginUserApi = "http://localhost:8000/api/auth/token/login";
const fetchUserApi = "http://localhost:8000/api/auth/users/me";

const createUser = (data) => {
  return async dispatch => {
    dispatch(createUserPending());
    try {
      let user_response = await axios.post(`${createUserApi}/`, data);
      console.log(user_response);

      await dispatch(loginUser({username: data.username, password: data.password}))

      return dispatch(createUserFulfilled(user_response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(createUserRejected());
    }
  };
};

const createUserPending = () => {
  return { type: CREATE_USER_PENDING };
};

const createUserRejected = () => {
  return { type: CREATE_USER_REJECTED };
};

const createUserFulfilled = user => {
  return { type: CREATE_USER_FULFILLED, payload: user };
};

/////////////////////////////////////////
///////// LOGIN USER

const loginUser = data => {
  return async (dispatch, getState) => {
    dispatch(loginUserPending());
    try {
      let response = await axios.post(`${loginUserApi}/`, data);
      const token = response.data.auth_token

      if (!getState().auth.user){
          await dispatch(fetchUser(token))
      }

      return dispatch(loginUserFulfilled(token));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(loginUserRejected());
    }
  };
};

const loginUserPending = () => {
  return { type: LOGIN_USER_PENDING };
};

const loginUserRejected = () => {
  return { type: LOGIN_USER_REJECTED };
};

const loginUserFulfilled = token => {
  return { type: LOGIN_USER_FULFILLED, payload: token };
};



/////////////////////////////////////
/////// FETCH USER

const fetchUser = (token=null) => {
  return async (dispatch, getState) => {
    dispatch(fetchUserPending());
    try {
      const authToken = token || getState().auth.token
      let response = await axios.get(`${fetchUserApi}/`, {
          headers: { Authorization: `Token ${authToken}`}
      });

      return dispatch(fetchUserFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(fetchUserRejected());
    }
  };
};

const fetchUserPending = () => {
  return { type: FETCH_USER_PENDING };
};

const fetchUserRejected = () => {
  return { type: FETCH_USER_REJECTED };
};

const fetchUserFulfilled = user => {
  return { type: FETCH_USER_FULFILLED, payload: user };
};


/////////////////////////////////////
/////// LOGOUT USER

const logoutUser = () => {
  return { type: LOGOUT_USER }
}


export { createUser, loginUser, fetchUser, logoutUser };