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
  LOGOUT_USER
} from "./constants";

import axios from "axios";

import { BASE_URL } from "../services/api";

const createUserApi = `${BASE_URL}/api/auth/users`;
const loginUserApi = `${BASE_URL}/api/auth/token/login`;
const fetchUserApi = `${BASE_URL}/api/auth/users/me`;

const createUser = data => {
  return async dispatch => {
    dispatch(createUserPending());
    try {
      let user_response = await axios.post(`${createUserApi}/`, data);
      console.log(user_response);

      await dispatch(
        loginUser({ username: data.username, password: data.password })
      );

      return dispatch(createUserFulfilled(user_response.data));
    } catch (e) {
      let messages = [];
      if (e.response) {
        const errors = e.response.data;

        for (let key in errors) {
          messages.push(errors[key][0]);
          console.log("messages ==> ", messages);
        }
      } else {
        console.log(e);
        messages = ["An Error occured"];
      }

      return dispatch(createUserRejected(messages));
    }
  };
};

const createUserPending = () => {
  return { type: CREATE_USER_PENDING };
};

const createUserRejected = message => {
  return { type: CREATE_USER_REJECTED, payload: message };
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
      const token = response.data.auth_token;

      await dispatch(fetchUser(token));

      return dispatch(loginUserFulfilled(token));
    } catch (e) {
      let messages = [];

      if (e.response) {

        if(e.response.status >= 500){
          messages= [`An error occured. Try again Later ${e.response.status}`]
          return dispatch(loginUserRejected(messages));
        }

        const errors = e.response.data;

        for (let key in errors) {
          messages.push(errors[key][0]);
          console.log("messages ==> ", messages);
        }
      } else {
        console.log(e);
        messages = ["An Error occured"];
      }

      return dispatch(loginUserRejected(messages));
    }
  };
};

const loginUserPending = () => {
  return { type: LOGIN_USER_PENDING };
};

const loginUserRejected = message => {
  return { type: LOGIN_USER_REJECTED, payload: message };
};

const loginUserFulfilled = token => {
  return { type: LOGIN_USER_FULFILLED, payload: token };
};

/////////////////////////////////////
/////// FETCH USER

const fetchUser = (token = null) => {
  return async (dispatch, getState) => {
    dispatch(fetchUserPending());
    try {
      const authToken = token || getState().auth.token;
      let response = await axios.get(`${fetchUserApi}/`, {
        headers: { Authorization: `Token ${authToken}` }
      });

      return dispatch(fetchUserFulfilled(response.data));
    } catch (e) {
      let messages = [];
      if (e.response) {
        const errors = e.response.data;

        for (let key in errors) {
          messages.push(errors[key][0]);
          console.log("messages ==> ", messages);
        }
      } else {
        console.log(e);
        messages = ["An Error occured"];
      }

      return dispatch(fetchUserRejected(messages));
    }
  };
};

const fetchUserPending = () => {
  return { type: FETCH_USER_PENDING };
};

const fetchUserRejected = message => {
  return { type: FETCH_USER_REJECTED, payload: message };
};

const fetchUserFulfilled = user => {
  return { type: FETCH_USER_FULFILLED, payload: user };
};

/////////////////////////////////////
/////// LOGOUT USER

const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export { createUser, loginUser, fetchUser, logoutUser };
