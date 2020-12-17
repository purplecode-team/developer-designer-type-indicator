import { useState, useEffect } from 'react';
import useDataLoad from './useDataLoad';

export default function useSumCount() {
  const [sum, setSum] = useState({
    developer: 0,
    designer: 0,
  });

  const [devCountState] = useDataLoad('devCount', null);
  const [designerCountState] = useDataLoad('devCount', null);

  useEffect(() => {
    if (devCountState.data && designerCountState.data) {
      setSum({
        developer: Object.values(devCountState.data).reduce(
          (total, val) => total + val
        ),
        designer: Object.values(designerCountState.data).reduce(
          (total, val) => total + val
        ),
      });
    }
  }, [devCountState, designerCountState]);

  return [sum];
}
