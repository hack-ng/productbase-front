import {
  FETCH_ENTRIES_PENDING,
  FETCH_ENTRIES_REJECTED,
  FETCH_ENTRIES_FULFILLED
  /////////////////////////
  
} from "./constants";

import axios from "axios";

const fetchEntriesApi = "http://localhost:8000/api/entries";

const fetchEntries = (token=null) => {
  return async (dispatch, getState) => {
    dispatch(fetchEntriesPending());
    try {
    const authToken = token || getState().auth.token
      let response = await axios.get(`${fetchEntriesApi}/`, {
        headers: { Authorization: `Token ${authToken}` }
      });
      
      console.log(response);
      return dispatch(fetchEntriesFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(fetchEntriesRejected());
    }
  };
};

const fetchEntriesPending = () => {
  return { type: FETCH_ENTRIES_PENDING };
};

const fetchEntriesRejected = () => {
  return { type: FETCH_ENTRIES_REJECTED };
};

const fetchEntriesFulfilled = entries => {
  return { type: FETCH_ENTRIES_FULFILLED, payload: entries };
};

export { fetchEntries };
