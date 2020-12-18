import { useState, useEffect, useReducer } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'EI':
      state.E += 1;
      return { ...state };
    case 'TF':
      state.T += 1;
      return { ...state };
    case 'JP':
      state.J += 1;
      return { ...state };
    default:

      return state;
  }
};

export default function useSetResult() {
    const [state, dispatch] = useReducer(reducer, { E: 0, T: 0, J: 0 });

    return [state, dispatch];
};