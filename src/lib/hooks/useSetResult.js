import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'E':
      state.E += 1;
      return { ...state };
    case 'I':
      state.I += 1;
      return { ...state };
    case 'T':
      state.T += 1;
      return { ...state };
    case 'F':
      state.F += 1;
      return { ...state };
    case 'J':
      state.J += 1;
      return { ...state };
    case 'P':
      state.P += 1;
      return { ...state };
    default:
      return state;
  }
};

export default function useSetResult() {
    const [state, dispatch] = useReducer(reducer, { E: 0, I: 0, T: 0, F: 0, J: 0, P: 0});

    return [state, dispatch];
};