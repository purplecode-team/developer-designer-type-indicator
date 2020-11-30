import { useState, useEffect } from 'react';
import { loadData } from '../util/api';

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
        developer: Object.values(devCount).reduce((sum, val) => sum + val),
        designer: Object.values(designerCount).reduce((sum, val) => sum + val),
      });
    });
  }, []);

  return [sum];
}
