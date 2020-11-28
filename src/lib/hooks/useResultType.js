import { useContext, useEffect, useState } from 'react';
import { Context } from '../helpers/Context';

export default function useResultType() {
  const { state } = useContext(Context);
  const [result, setResult] = useState('');
  useEffect(() => {
    const combineResult = () => {
      let temp = '';
      if (state.E > 2) {
        temp += 'E';
      } else {
        temp += 'I';
      }
      if (state.T > 2) {
        temp += 'T';
      } else {
        temp += 'F';
      }
      if (state.J > 2) {
        temp += 'J';
      } else {
        temp += 'P';
      }
      setResult(result + temp);
    };
    combineResult();
  }, []);
  return [result];
}
