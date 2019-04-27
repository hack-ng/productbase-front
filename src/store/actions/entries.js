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
  REJECT_ENTRY_FULFILLED
  /////////////////////////
  
} from "./constants";

import axios from "axios";

const fetchEntriesApi = "http://localhost:8000/api/entries";
const approveEntryApi = "http://localhost:8000/api/entries";
const rejectEntryApi = "http://localhost:8000/api/entries";

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


///////////////////////////////////////////////////////
///////// APPROVE ENTRY PENDING

const approveEntry = (id, token = null) => {
  return async (dispatch, getState) => {
    dispatch(approveEntryPending());
    try {
      const authToken = token || getState().auth.token;
      let response = await axios.patch(`${approveEntryApi}/${id}/`, 
      { status: "approved" }
      ,{
        headers: { Authorization: `Token ${authToken}` }
      });

      console.log(response);

      // update entries
      await dispatch( fetchEntries() )

      return dispatch(approveEntryFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(approveEntryRejected());
    }
  };
};

const approveEntryPending = () => {
  return { type: APPROVE_ENTRY_PENDING };
};

const approveEntryRejected = () => {
  return { type: APPROVE_ENTRY_REJECTED };
};

const approveEntryFulfilled = entry => {
  return { type: APPROVE_ENTRY_FULFILLED, payload: entry };
};


///////////////////////////////////////////////////////
///////// REJECT ENTRY PENDING

const rejectEntry = (id, token = null) => {
  return async (dispatch, getState) => {
    dispatch(rejectEntryPending());
    try {
          const authToken = token || getState().auth.token;
          let response = await axios.patch(
            `${rejectEntryApi}/${id}/`,
            { status: "rejected" },
            {
              headers: { Authorization: `Token ${authToken}` }
            }
          );

          console.log(response);

          // update entries
          await dispatch(fetchEntries());

          return dispatch(rejectEntryFulfilled(response.data));
        } catch (e) {
      console.log(e.response.data);
      return dispatch(rejectEntryRejected());
    }
  };
};

const rejectEntryPending = () => {
  return { type: REJECT_ENTRY_PENDING };
};

const rejectEntryRejected = () => {
  return { type: REJECT_ENTRY_REJECTED };
};

const rejectEntryFulfilled = entry => {
  return { type: REJECT_ENTRY_FULFILLED, payload: entry };
};



export { fetchEntries, approveEntry, rejectEntry };