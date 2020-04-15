import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  console.log('in search');
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    console.log(data);
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    console.log('gpoing to updagte log');
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log('data');
    console.log(data);
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    await res.json();

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const currentSet = (log) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};

export const currentClear = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
