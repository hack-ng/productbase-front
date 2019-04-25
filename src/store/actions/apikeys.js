import {
  FETCH_APIKEYS_PENDING,
  FETCH_APIKEYS_REJECTED,
  FETCH_APIKEYS_FULFILLED,
  /////////////////////////
  GENERATE_APIKEYS_PENDING,
  GENERATE_APIKEYS_REJECTED,
  GENERATE_APIKEYS_FULFILLED
} from "./constants";

import axios from "axios";

const fetchAPIKeysApi = "http://localhost:8000/api/apikeys";
const generateAPIKeysApi = "http://localhost:8000/api/apikeys";

const fetchAPIKeys = (token = null) => {
  return async (dispatch, getState) => {
    dispatch(fetchAPIKeysPending());
    try {
      const authToken = token || getState().auth.token;
      let response = await axios.get(`${fetchAPIKeysApi}/`, {
        headers: { Authorization: `Token ${authToken}` }
      });

      console.log(response);
      return dispatch(fetchAPIKeysFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(fetchAPIKeysRejected());
    }
  };
};

const fetchAPIKeysPending = () => {
  return { type: FETCH_APIKEYS_PENDING };
};

const fetchAPIKeysRejected = () => {
  return { type: FETCH_APIKEYS_REJECTED };
};

const fetchAPIKeysFulfilled = apikeys => {
  return { type: FETCH_APIKEYS_FULFILLED, payload: apikeys };
};

////////////////////////////////////////////////
//////// GENERATE API KEYS

const generateAPIKeys = (token = null) => {
  return async (dispatch, getState) => {
    dispatch(generateAPIKeysPending());
    try {
      const authToken = token || getState().auth.token;
      let response = await axios.post(`${generateAPIKeysApi}/`, {},{
        headers: { Authorization: `Token ${authToken}` }
      });

    //   once api key is generated, fetch all api keys
      await dispatch(fetchAPIKeys())
      
      return dispatch(generateAPIKeysFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(generateAPIKeysRejected());
    }
  };
};

const generateAPIKeysPending = () => {
  return { type: GENERATE_APIKEYS_PENDING };
};

const generateAPIKeysRejected = () => {
  return { type: GENERATE_APIKEYS_REJECTED };
};

const generateAPIKeysFulfilled = apikey => {
  return { type: GENERATE_APIKEYS_FULFILLED, payload: apikey };
};



export { fetchAPIKeys, generateAPIKeys };
