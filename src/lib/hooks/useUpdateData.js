import { useState, useEffect, useReducer } from 'react';
import * as api from '../firebase/api';

const dataUpdateReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isUploaded: true,
      };
    case 'UPDATE_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export default function useUpdateData(url, initialData) {
  const [data, setData] = useState(initialData);
  const initialState = {
    isLoading: false,
    isError: false,
    isUploaded: false,
  };
  const [state, dispatch] = useReducer(dataUpdateReducer, initialState);

  useEffect(() => {
    // prevent to set component state after the component get unmounted
    const didCancel = false;

    const updateData = async () => {
      if (!data) {
        return;
      }
      dispatch({ type: 'UPDATE_INIT' });
      try {
        await api.updateData(url, data);
        if (!didCancel) {
          dispatch({ type: 'UPDATE_SUCCESS' });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'UPDATE_FAILURE' });
        }
      }
    };

    updateData();
  }, [data]);

  return [state, setData];
}
