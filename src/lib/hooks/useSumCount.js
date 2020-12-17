import { useState, useEffect } from 'react';
import useLoadData from './useLoadData';

export default function useSumCount() {
  const [sum, setSum] = useState({
    developer: 0,
    designer: 0,
  });

  const [devCountState] = useLoadData('devCount', null);
  const [designerCountState] = useLoadData('devCount', null);

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
