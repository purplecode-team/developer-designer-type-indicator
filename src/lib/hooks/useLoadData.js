import { useState, useEffect, useReducer } from 'react';
import * as api from '../firebase/api';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export default function useLoadData(initialUrl, initialData) {
  const [url, setUrl] = useState(initialUrl);
  const initialState = {
    isLoading: false,
    isError: false,
    data: initialData,
  };
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    // prevent to set component state after the component get unmounted
    const didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await api.loadData(initialUrl);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
}
