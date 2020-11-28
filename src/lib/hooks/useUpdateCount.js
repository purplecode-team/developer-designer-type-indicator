import { useEffect, useState } from 'react';
import * as api from '../util/api';

export default function useUpdateCount({ result, type }) {
  const [count, setCount] = useState(null);
  const match = type === 'designer' ? 'designerCount' : 'devCount';

  const loadCount = async () => {
    try {
      return await api.loadData(match);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateCount = () => {
      loadCount().then((count) => {
        setCount(count);
        return api.updateData(`/${match}/${result}`, count[result] + 1);
      });
    };
    if (result) {
      updateCount();
    }
  }, []);

  return [count];
}
