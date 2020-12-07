import { useState, useEffect } from 'react';
import { loadData } from '../firebase/api';

export default function useSumCount() {
  const [sum, setSum] = useState({
    developer: 0,
    designer: 0,
  });

  const loadCount = async () => {
    const devCount = await loadData('devCount');
    const designerCount = await loadData('designerCount');
    return { devCount, designerCount };
  };

  useEffect(() => {
    loadCount().then(({ devCount, designerCount }) => {
      setSum({
        developer: Object.values(devCount).reduce((total, val) => total + val),
        designer: Object.values(designerCount).reduce(
          (total, val) => total + val
        ),
      });
    });
  }, []);

  return [sum];
}
