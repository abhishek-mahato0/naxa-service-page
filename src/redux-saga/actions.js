import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from './Constants';

//calling data fetch request
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
  payload: [],
});

//function for fetch success
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

// function for handling error while fetching data
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
